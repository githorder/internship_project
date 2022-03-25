import React, { useState, useEffect } from 'react';

import './ReviewForm.css';
import close from './close.svg';
import add from './add-line.svg';
import info from './info.svg';
import loading from './loading.svg';
import file from './file.svg';
import deleteIcon from './delete.svg';

import Toast from '../Toast/Toast';

function ReviewForm({ hideForm, isShown }) {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isImageBig, setIsImageBig] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVaild, setIsValid] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const onImageChange = function (event) {
    setIsSelected(true);
    setImages([...event.target.files]);
    setProgress(0);
    // validation check
    if (event.target.files[0].size >= 500000) {
      setIsImageBig(true);
      setProgress(100);
      setIsLoading(false);
      return;
    }
  };

  const onNameChange = function (event) {
    setName(event.target.value);
  };

  const onReviewChange = function (event) {
    setReview(event.target.value);
  };

  const handleValidation = function () {
    let isOk = true;
    let errorsObj = {};
    //Name
    if (!name) {
      isOk = false;
      errorsObj.name = 'Cannot be empty';
    }

    if (!name.match(/^[a-zA-Z\s]+$/)) {
      isOk = false;
      errorsObj.name = 'Only letters';
    }

    // Review
    if (!review) {
      isOk = false;
      errorsObj.review = 'Cannot be empty';
    }

    if (review.length > 150) {
      isOk = false;
      errorsObj.review = 'No more than 150 words';
    }

    setErrors({ ...errorsObj });

    return isOk;
  };

  const onSubmit = function (event) {
    event.preventDefault();

    setIsSubmiting(true);

    if (handleValidation() && images.length && !isImageBig) {
      console.log('name', name);
      console.log('revew', review);
      console.log('image name', images[0].name);
      setIsValid(true);
    } else {
      console.log(errors.name, errors.review);
      setIsValid(false);
    }

    setTimeout(() => {
      hideForm();
      setIsSubmiting(false);
    }, 3000);
  };

  useEffect(() => {
    if (images.length < 1) return;
    setIsLoading(true);

    let interval = setInterval(() => {
      if (progress <= 100) {
        setProgress(progress + 10);
      } else {
        setIsLoading(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [images, progress]);

  return (
    <>
      <div className={isShown && !isSubmiting ? 'show' : 'hide'}>
        <div className="form_container">
          <form>
            <fieldset>
              <legend>
                <span>Review</span>
                <span className="close" onClick={hideForm}>
                  <img alt="close" src={close} />
                </span>
              </legend>
              <label htmlFor="name">
                What is your name
                <div className="author_details">
                  <input
                    onChange={onNameChange}
                    autoComplete="off"
                    className="name"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="first and last name"
                  />
                  <div>
                    <span>
                      <img src={add} alt="upload" />
                    </span>
                    <label htmlFor="select_image">Upload a photo</label>
                    <input
                      onChange={onImageChange}
                      type="file"
                      name="image"
                      id="select_image"
                    />
                  </div>
                </div>
              </label>

              <div className={isSelected ? 'image_container' : 'hide'}>
                <img alt="file" src={file} />
                <div>
                  {images.map((image, index) => (
                    <span className={isImageBig ? 'error' : ''} key={index}>
                      {isImageBig ? 'Your image is too big' : image.name}
                    </span>
                  ))}
                  <div className="progress">
                    <div
                      style={{
                        width: `${progress}%`,
                        position: 'absolute',
                        top: '-2px',
                        left: '-2px',
                        border: '2px solid #585cc6',
                      }}
                      className="sub_progress"
                    ></div>
                  </div>
                </div>
                <img
                  className={isLoading ? 'animate' : 'hide'}
                  src={isImageBig ? deleteIcon : loading}
                  alt="loading"
                />
              </div>

              <label htmlFor="review" className="review_label">
                What do you like the most
                <input
                  onChange={onReviewChange}
                  type="text"
                  className="review"
                  placeholder="please, write a few words about your experience"
                  name="review"
                  id="review"
                />
                <span className="limit">0/150</span>
              </label>

              <div className="submit_container">
                <input
                  onClick={onSubmit}
                  className="send"
                  type="submit"
                  value="Send"
                />{' '}
                <span className="note">
                  <img src={info} alt="info" />
                  Your reviews goes through moderation during 2 hours
                </span>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <Toast isValid={isVaild} isSubmiting={isSubmiting} />
    </>
  );
}

export default ReviewForm;

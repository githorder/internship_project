import React, { useState } from 'react';

import './App.css';

import Header from './components/LayoutComponents/Header/Header';
import Main from './components/LayoutComponents/Main/Main';
import Footer from './components/LayoutComponents/Footer/Footer';

import ReviewForm from './components/ReviewForm/ReviewForm';

function App() {
  const [isShown, setIsShown] = useState(false);

  const showForm = () => {
    if (!isShown) {
      setIsShown(true);
    }
  };

  const hideForm = () => {
    setIsShown(false);
  };

  return (
    <div className="App">
      <Header />
      <Main showForm={showForm} />
      <Footer />
      <ReviewForm isShown={isShown} hideForm={hideForm} />
    </div>
  );
}

export default App;

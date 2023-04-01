import React from 'react';
import Blogs from './component/Blogs/Blogs';
import Header from './component/Header/Header';
import QuestionAnswer from './component/QuestionAnswer/QuestionAnswer';

const App = () => {
  return (
    <>
      <Header />
      <Blogs />
      <QuestionAnswer />
    </>
  );
};

export default App;
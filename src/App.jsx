import React from 'react';
import Blogs from './component/Blogs/Blogs';
import Header from './component/Header/Header';
import QuestionAnswer from './component/QuestionAnswer/QuestionAnswer';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Header />
      <Blogs />
      <QuestionAnswer />
      {/* <ToastContainer></ToastContainer> */}
    </>
  );
};

export default App;
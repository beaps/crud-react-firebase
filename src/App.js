import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Tutorials from './components/Tutorials';

import './App.css';

function App() {
  return (
    <>
      <Tutorials />
      <ToastContainer />
    </>
  );
}

export default App;

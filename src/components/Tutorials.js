import React from 'react';

import TutorialForm from './TuturialForm';


function Tutorials() {

  function addTask() {
    console.log('new task')
  }

  return (
    <div>
      <TutorialForm addOrEdit={addTask} />
      <h1>Tutorials</h1>
    </div>
  );
}

export default Tutorials;
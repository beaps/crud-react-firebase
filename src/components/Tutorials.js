import React from 'react';

import TutorialForm from './TuturialForm';

import {db} from '../firebase';


function Tutorials() {

  async function addOrEditTutorial(tutorialObject) {
    console.log(tutorialObject)
    await db.collection('tutorials').doc().set(tutorialObject);
    console.log('new task added');
  }

  return (
    <div>
      <TutorialForm addOrEditTutorial={addOrEditTutorial} />
      <h1>Tutorials</h1>
    </div>
  );
}

export default Tutorials;
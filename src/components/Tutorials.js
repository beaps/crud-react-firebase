import React, {useEffect, useState} from 'react';

import TutorialForm from './TuturialForm';

import {db} from '../firebase';


function Tutorials() {

  const [tutorials, setTutorials] = useState([]);

  async function addOrEditTutorial(tutorialObject) {
    console.log(tutorialObject)
    await db.collection('tutorials').doc().set(tutorialObject);
    console.log('new task added');
  }

  async function getTutorials() {
    const docs = [];
    const querySnapshot = await db.collection('tutorials').get();
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });
    setTutorials(docs);
  }

  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <div>
      <TutorialForm addOrEditTutorial={addOrEditTutorial} />
      <h1>Tutorials</h1>
    </div>
  );
}

export default Tutorials;
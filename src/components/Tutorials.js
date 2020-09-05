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
    // const docs = [];

    // If you add new tutorials, new data is not updated
    // const querySnapshot = await db.collection('tutorials').get();
    // querySnapshot.forEach(doc => {
    //   docs.push({...doc.data(), id: doc.id});
    // });

    db.collection('tutorials').onSnapshot(querySnapshot => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id});
      });
      setTutorials(docs);
    });
  }

  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <div>
      <TutorialForm addOrEditTutorial={addOrEditTutorial} />
      <div className="tutorials">
        {tutorials.map(tutorial => {
          return (
          <div className='tutorial' key={tutorial.id}>
            <h2>{tutorial.tutorialName}</h2>
            <p>{tutorial.author}</p>
            <a href={tutorial.url} target='_blank' rel="noopener noreferrer">
              Go to the tutorial
            </a>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tutorials;
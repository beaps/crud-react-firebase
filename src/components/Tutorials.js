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

    // If you make a change, auto refresh -> onSnapshot
    db.collection('tutorials').onSnapshot(querySnapshot => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id});
      });
      setTutorials(docs);
    });
  }

  async function onDeleteTutorial(id) {
    // Confirm you want to delete the tutorial
    if (window.confirm('Are you sure you want to delete this tutorial?')) {
      await db.collection('tutorials').doc(id).delete();
    }
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
            <div>
              <i
                className='material-icons'
                onClick={() => onDeleteTutorial(tutorial.id)}>
                  close
              </i>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tutorials;
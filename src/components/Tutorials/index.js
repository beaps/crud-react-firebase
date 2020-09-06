import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';

import TutorialForm from '../TutorialForm';

import {db} from '../../firebase';

import './styles.css';


function Tutorials() {

  const [tutorials, setTutorials] = useState([]);
  const [currentId, setCurrentId] = useState('');

  async function addOrEditTutorial(tutorialObject) {
    try {
      if (currentId === '') {
        await db.collection('tutorials').doc().set(tutorialObject);
        toast('New tutorial added', {type: 'success'});
      } else {
        await db.collection('tutorials').doc(currentId).update(tutorialObject);
        toast('Tutorial updated', {type: 'info'});
        setCurrentId('');
      }
    } catch (error) {
      console.error(error);
    }
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
      toast('Tutorial removed', {type: 'error', autoClose: 2000});
    }
  }

  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <div>
      <TutorialForm {...{addOrEditTutorial, currentId}}/>
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
              <i
                className='material-icons'
                onClick={() => setCurrentId(tutorial.id)}>
                  create
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
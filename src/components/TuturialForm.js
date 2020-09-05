import React, {useState} from 'react';

function TutorialForm(props) {
  const {addOrEditTutorial} = props;

  const initialStateValues = {
    url: '',
    tutorialName: '',
    author: ''
  }

  const [values, setValues] = useState(initialStateValues);

  function handleSubmit(e) {
    e.preventDefault();
    addOrEditTutorial(values);
    setValues({...initialStateValues})
  }

  function handleInputChange(e) {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="form-icon">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className='form-control'
          placeholder='https://some-tutorial.com'
          name='url'
          onChange={handleInputChange}
          value={values.url}
        />
      </div>

      <div className="form-group">
        <div className="form-icon">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          className='form-control'
          placeholder='Tutorial name'
          name='tutorialName'
          onChange={handleInputChange}
          value={values.tutorialName}
        />
      </div>

      <div className="form-group">
        <div className="form-icon">
          <i className="material-icons">person</i>
        </div>
        <input
          type="text"
          className='form-control'
          placeholder='Author'
          name='author'
          onChange={handleInputChange}
          value={values.author}
        />
      </div>

      <button className='form-btn-save'>
        Save
      </button>
    </form>
  );
}

export default TutorialForm;
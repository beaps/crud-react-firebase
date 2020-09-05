import React, {useState} from 'react';

function TutorialForm(props) {
  const {addOrEdit} = props;

  const [values, setValues] = useState({
    url: '',
    tutorialName: '',
    author: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    addOrEdit();
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
        />
      </div>

      <button className='form-btn-save'>
        Save
      </button>
    </form>
  );
}

export default TutorialForm;
import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  //useContext-hook
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  //usestate of form
  const [text, setText] = useState('');

  //triger which seach btn is clicked
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('please enter something...', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  //triger while search operation takes place
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        ></input>
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        ></input>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

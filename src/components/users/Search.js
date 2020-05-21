import React, { useState, useContext } from 'react';
import { searchUsers } from '../../context/github/actions';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS } from '../../context/types';

const Search = () => {
  //useContext-hook
  const { dispatch, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  //usestate of form
  const [text, setText] = useState('');

  //triger which seach btn is clicked
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('please enter something...', 'light');
    } else {
      dispatch({ type: SET_LOADING });
      searchUsers(text).then((users) => {
        dispatch({ type: SEARCH_USERS, payload: users });
        setText('');
      });
    }
  };

  //triger while search operation takes place
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search Users...'
          onChange={onChange}
        ></input>
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        ></input>
      </form>
      {users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={() => dispatch({ type: CLEAR_USERS })}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

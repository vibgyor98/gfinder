import React, { useReducer } from 'react';

import GithubContext from './githubContext';
import githubReducer from './githubReducer';

//Initial State
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  //useReducer
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //provider
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

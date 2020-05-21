import React, { useState } from 'react';
import AlertContext from './alertContext';

//Initial State
const AlertState = (props) => {
  const [alert, setAlertState] = useState(null);

  //Set Alert
  const setAlert = (msg, type) => {
    setAlertState({ msg, type });
    setTimeout(() => setAlertState(null), 3000);
  };

  //provider
  return (
    <AlertContext.Provider
      value={{
        alert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

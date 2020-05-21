import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Fragment>
      <h1>About this app</h1>
      <p>React App to search Github Users</p>
      <p>Version: 1.0.0</p>
      <p>
        Developed by:
        <Link to='https://www.linkedin.com/in/sourav-kar-78b093134/'>
          <strong> Sourav Kar</strong>
        </Link>
      </p>
      <p>
        Check the repo, add more features:
        <Link to='https://github.com/vibgyor98/gfinder'>
          <strong> Github </strong>
        </Link>
      </p>
    </Fragment>
  );
};

export default About;

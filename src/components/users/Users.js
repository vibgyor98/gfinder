import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

//Handle all Users
const Users = () => {
  //useContext
  const { users, loading } = useContext(GithubContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='users-style'>
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

// //Grid style for users
// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   gridGap: '1rem',
// };

export default Users;

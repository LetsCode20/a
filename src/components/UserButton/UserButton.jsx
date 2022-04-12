import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  logoutInitiate,
  selectUser,
} from '../../redux/features/auth/authSlice';
import { SIGNINROUTE } from '../../navigation/CONSTANT';
import { Button, ButtonLink } from './UserButton.style';
import { toast } from 'react-toastify';

const UserButton = () => {
  let navigate = useNavigate();
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logout = () => {
    if (user) {
      dispatch(logoutInitiate());
      navigate(SIGNINROUTE);
      return toast.info('See You Soon!');
    }
  };

  return (
    <>
      {user ? (
        <Button onClick={logout}>
          <ButtonLink to='#'>Sign Out</ButtonLink>
        </Button>
      ) : (
        <Button>
          <ButtonLink to={SIGNINROUTE}>Sign In</ButtonLink>
        </Button>
      )}
    </>
  );
};

export default UserButton;

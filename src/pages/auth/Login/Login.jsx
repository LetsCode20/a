import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Fc from 'react-icons/fc';
import {
  loginInitiate,
  selectUser,
  signInWithGoogleInitiate,
} from '../../../redux/features/auth/authSlice';
import {
  Form,
  FormButton,
  FormButtonGoogle,
  FormButtons,
  FormGroup,
  FormInput,
  FormLabel,
} from '../Register/Register.style';

const Login = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) return toast.info('Please fill in all fields');

    dispatch(loginInitiate(email, password));
    setState({
      email: '',
      password: '',
    });
    return toast.success('Login Successfully!');
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogleInitiate());
    toast.success('Login Successfully!');
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [dispatch, user, navigate]);

  return (
    <Form onSubmit={handleLogin}>
      <h2>I already have an account</h2>
      <p>Sign in with your email and password</p>

      <FormGroup>
        <FormInput
          type='email'
          name='email'
          id='emailLogin'
          value={email}
          onChange={handleChange}
          required
        />
        <FormLabel htmlFor='emailLogin'>Email</FormLabel>
      </FormGroup>

      <FormGroup>
        <FormInput
          type='password'
          name='password'
          id='passwordLogin'
          value={password}
          onChange={handleChange}
          required
        />
        <FormLabel htmlFor='passwordLogin'>Password</FormLabel>
      </FormGroup>

      <FormButtons>
        <FormButton onClick={handleLogin}>Sign In</FormButton>

        <FormButtonGoogle onClick={handleGoogleSignIn}>
          Sign In with <Fc.FcGoogle />
        </FormButtonGoogle>
      </FormButtons>
    </Form>
  );
};

export default Login;

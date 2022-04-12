import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  registerInitiate,
  selectUser,
} from '../../../redux/features/auth/authSlice';
import { HOMEROUTE } from '../../../navigation/CONSTANT';
import {
  Form,
  FormInput,
  FormLabel,
  FormGroup,
  FormButtons,
  FormButton,
} from './Register.style';

const Register = () => {
  let navigate = useNavigate();
  const user = useSelector(selectUser);

  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password, displayName, confirmPassword } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!displayName || !email || !password || !confirmPassword)
      return toast.info('Please fill in all fields');

    if (password.length < 8)
      return toast.info('Password must be more than 8 characters');

    if (password !== confirmPassword) return toast.info("Password don't match");

    dispatch(registerInitiate(email, password, displayName));
    setState({ displayName: '', email: '', password: '', confirmPassword: '' });
    toast.success('Register Successfully!');
  };

  useEffect(() => {
    if (user !== null) {
      navigate(HOMEROUTE);
    }
  }, [dispatch, user, navigate]);

  return (
    <Form className='active' onSubmit={handleRegister}>
      <h2>I do not have an account</h2>
      <p>Sign up with your email and password</p>

      <FormGroup>
        <FormInput
          type='displayName'
          name='displayName'
          id='displayName'
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormLabel htmlFor='displayName'>Display Name</FormLabel>
      </FormGroup>

      <FormGroup>
        <FormInput
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormLabel htmlFor='email'>Email</FormLabel>
      </FormGroup>

      <FormGroup>
        <FormInput
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={handleChange}
          required
        />
        <FormLabel htmlFor='password'>Password</FormLabel>
      </FormGroup>

      <FormGroup>
        <FormInput
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
      </FormGroup>

      <FormButtons>
        <FormButton onClick={handleRegister}>Sign Up</FormButton>
      </FormButtons>
    </Form>
  );
};

export default Register;

import { createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import {
  auth,
  currentUser,
  googleAuthProvider,
} from '../../../configs/FirebaseConfigs';

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { addUser, resetUser } = authSlice.actions;

export const selectUser = (state) => state.user.user;

export const registerInitiate =
  (email, password, displayName) => (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(currentUser, { displayName })
          .then((user) => {
            const data = {
              id: user.user.uid,
              email: user.user.email,
              phoneNumber: user.user.phoneNumber,
              photoURL: user.user.photoURL,
            };

            dispatch(loginUser(data));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

export const loginInitiate = (email, password) => (dispatch) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      const data = {
        id: user.user.uid,
        email: user.user.email,
        phoneNumber: user.user.phoneNumber,
        photoURL: user.user.photoURL,
      };

      dispatch(loginUser(data));
    })
    .catch((error) => console.log(error));
};

export const signInWithGoogleInitiate = () => (dispatch) => {
  signInWithPopup(auth, googleAuthProvider)
    .then((user) => {
      const data = {
        id: user.user.uid,
        displayName: user.user.displayName,
        email: user.user.email,
        phoneNumber: user.user.phoneNumber,
        photoURL: user.user.photoURL,
      };

      dispatch(loginUser(data));
    })
    .catch((error) => console.log(error));
};

export const logoutInitiate = () => (dispatch) => {
  auth.signOut();
  dispatch(logoutUser());
};

export const loginUser = (data) => (dispatch) => {
  dispatch(addUser(data));
};

export const logoutUser = () => (dispatch) => {
  dispatch(resetUser());
};

export default authSlice.reducer;

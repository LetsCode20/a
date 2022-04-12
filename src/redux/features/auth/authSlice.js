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
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, resetUser } = authSlice.actions;

export const selectUser = (state) => state.user.user;
export const isLoading = (state) => state.isLoading;

export const registerInitiate =
  (email, password, displayName) => (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(currentUser, { displayName })
          .then((user) => {
            const data = {
              id: user.user.uid,
              displayName: displayName,
              email: user.user.email,
              phoneNumber: user.user.phoneNumber,
              photoURL: user.user.photoURL,
            };

            dispatch(loginUser(data));
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

export const loginInitiate = (email, password) => (dispatch) => {
  signInWithEmailAndPassword(auth, email, password)
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
    .catch((err) => console.error(err));
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
    .catch((err) => console.error(err));
};

export const logoutInitiate = () => (dispatch) => {
  auth.signOut();
  dispatch(logoutUser());
};

export const loginUser = (data) => (dispatch) => {
  dispatch(setUser(data));
};

export const logoutUser = () => (dispatch) => {
  dispatch(resetUser());
};

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../Firebase/firebase';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isLoading: true,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
      state.isLoading = false;
    },
  },
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;



export const loginWithEmail = (email, password) => async (dispatch) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    dispatch(setCurrentUser(userCredential.user));
  } catch (error) {
    console.log(error.message);
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  try {
    const provider = new auth.GoogleAuthProvider();
    const userCredential = await auth.signInWithPopup(provider);
    dispatch(setCurrentUser(userCredential.user));
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch(clearCurrentUser());
  } catch (error) {
    console.log(error.message);
  }
};

export default userSlice.reducer;

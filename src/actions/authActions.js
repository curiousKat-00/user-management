export const signIn = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: 'SIGN_IN' })
      })
      .catch((err) => {
        dispatch({ type: 'SIGN_IN_ERR' }, err)
      })
  }
}

export const signUp = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: 'REGISTER_USER' })
      })
      .catch(() => {
        dispatch({ type: 'REGISTER_USER_ERR' })
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGN_OUT' })
      })
  }
}

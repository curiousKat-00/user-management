export const addCard = (card) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase.firestore()
    firestore
      .collection('cards')
      .add({
        ...card,
      })
      .then(() => {
        dispatch({
          type: 'ADD_CARD',
          card,
        })
      })
      .catch((err) => {
        dispatch({
          type: 'ADD_CARD_ERR',
          err,
        })
      })
  }
}

const initState = {}

const cardReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CARD': {
      console.log('Added a card...')
      return state
    }
    case 'ADD_CARD_ERR': {
      console.log('Added a card error occured...')
      return state
    }
    default:
      return state
  }
}

export default cardReducer

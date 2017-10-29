import { RECEIVE_DECKS, ADD_CARD, ADD_DECK } from '../actions'

function flashCardReducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    default :
      return state
  }
}

export default flashCardReducer

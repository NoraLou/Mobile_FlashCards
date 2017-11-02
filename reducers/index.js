import { RECEIVE_DECKS, ADD_CARD, ADD_DECK } from '../actions'

function flashCardReducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_CARD :
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          questions: [...state[action.key].questions, action.question]
        }
      }
    case ADD_DECK:

      return {
        ...state,
        [action.deck.id]: {
          ...action.deck,
        }
      }

    default :
      return state
  }
}

export default flashCardReducer


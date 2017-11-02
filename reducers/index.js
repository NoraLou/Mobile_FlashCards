import { RECEIVE_DECKS, ADD_CARD, ADD_DECK } from '../actions'

function flashCardReducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_CARD :
      console.log('action ', action)
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          questions: [...state[action.key].questions, action.question]
        }
      }
    default :
      return state
  }
}

export default flashCardReducer


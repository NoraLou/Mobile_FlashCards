import * as API from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'

export const fetchAllDecks = () => (dispatch) => {
  API.fetchAllDecks().then(
    (decks) => dispatch(receiveDecks(decks))
  );
};

function receiveDecks ( decks ){
  return {
    type: RECEIVE_DECKS,
    decks
  }
}


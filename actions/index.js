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

export const addCardToDeck = (key, question) => (dispatch) => {
  API.addCardToDeck(key, question)
  .then(function(){
    dispatch(receiveCard(key, question))
  })
}

// export const addCardToDeck = (deckKey, question) => (dispatch) => {
//   API.addCardToDeck(deckKey, question).then(res => console.log("res :", res))
// }

function receiveCard (key, question ){
  return {
    type: ADD_CARD,
    key,
    question,
  }
}

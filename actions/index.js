import * as API from '../utils/api'
import { makeSlug, generateID } from '../utils/helpers'

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

function receiveCard (key, question ){
  return {
    type: ADD_CARD,
    key,
    question,
  }
}

export const addDeck = ( title ) => (dispatch) => {
  const id = generateID()
  const slug = makeSlug(title)
  const newDeck = {
    id,
    slug,
    title,
    questions:[],
  }
  API.addDeck(newDeck).then(function(){
    dispatch(receiveDeck(newDeck))
  })
}

function receiveDeck( deck ){
  return {
    type: ADD_DECK,
    deck,
  }
}

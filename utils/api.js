import { AsyncStorage } from 'react-native'
import { composeCardData , CARDS_STORAGE_KEY} from './cardData'
import { makeSlug, generateID } from './helpers'

export function fetchAllDecks () {
  // AsyncStorage.clear();
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(composeCardData)
}


export function addCardToDeck (key, question) {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
  .then(function(res){
    let currDeck = JSON.parse(res)[key]
    currDeck.questions.push(question)
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY,
      JSON.stringify({[key]: currDeck})
    )
  })
}


export function addDeck(newDeck) {
  const key = newDeck.id
  return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({[key]: newDeck}))
}




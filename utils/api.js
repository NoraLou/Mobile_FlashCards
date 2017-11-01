import { AsyncStorage } from 'react-native'
import { composeCardData , CARDS_STORAGE_KEY} from './cardData'

//To manage your AsyncStorage database, you'll want to create four different helper methods.
// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.




export function fetchAllDecks () {
  //console.log("inside api with fetchAllDecks")
  AsyncStorage.clear();
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(composeCardData)
}


export function addCardToDeck (titleKey, question) {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
  .then((res, titleKey) => {
    console.log(`API.addCardToDeck with res ${res}`)
    debugger
    return true
  })
}

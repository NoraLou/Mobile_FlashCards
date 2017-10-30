import { AsyncStorage } from 'react-native'
import { composeCardData , CARDS_STORAGE_KEY} from './cardData'

export function fetchAllDecks () {
  //console.log("inside api with fetchAllDecks")
  //AsyncStorage.clear();
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(composeCardData)
}

import { AsyncStorage } from 'react-native'
export const CARDS_STORAGE_KEY ='MobileFlashCards:decks'


function setDummyData() {

  const payLoad = {
    'p9hc9Kuc': {
      id: 'p9hc9Kuc',
      slug: 'react',
      title: 'React',
      questions: [
        {
          q: 'What is React?',
          a: 'A library for managing user interfaces'
        },
        {
          q: 'Where do you make Ajax requests in React?',
          a: 'The componentDidMount lifecycle event'
        },
      ]
    }
  }

  AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(payLoad))
  return payLoad
}

function formatDecks (results) {
  //console.log(`formatDecks with ${results}`)
  return JSON.parse(results)
}


export function composeCardData (results) {
  //console.log(`composeCardData with ${results}`)
  return results === null
    ? setDummyData()
    : formatDecks(results)
}




























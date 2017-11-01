import { AsyncStorage } from 'react-native'
export const CARDS_STORAGE_KEY ='MobileFlashCards:decks'


function setDummyData() {

  const payLoad = {
    react: {
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
    },
    es6: {
      slug: 'es6',
      title: 'ES6',
      questions: [
        {
          q: 'What does the spread operator do? ',
          a: 'It takes every single item from an interable and applies it to the containing element'
        },
        {
          q: 'What are two new Array methods?',
          a: 'Array.find() & Array.findIndex()'
        },
      ]
    },
    Linux: {
      slug: 'linux-command-line',
      title: 'Linux Command Line',
      questions: [
        {
          q: 'What does the commad "cat filename.txt" do ?',
          a: 'It will display the contents of the given file in the shell'
        },
        {
          q: 'What does the command "chmod u + x" do?',
          a: 'It changes user permissions to read and write'
        },
        {
          q: 'What does the command "ls -a" do?',
          a: 'It lists all the file names (even the hidden system directories that start wiht a "."'
        },
        {
          q: 'What does the command "pwd" do?',
          a: 'It displays the path to our current working directory'
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
























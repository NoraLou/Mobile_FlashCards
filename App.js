import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { darkBlue, white } from './utils/colors'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import AddCard from './components/AddCard'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import flashCardReducer from './reducers'
import { Provider } from 'react-redux'
import { setLocalNotification} from './utils/helpers'
import { FontAwesome, Ionicons } from '@expo/vector-icons'



function FlashCardStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const store = createStore(
  flashCardReducer,
  applyMiddleware(thunk)
)

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'All Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  },
},{
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? darkBlue : white,
    labelStyle: {
      fontSize: 16,
      color: Platform.OS === 'ios' ? darkBlue : white,
      fontWeight:'bold',
      justifyContent: 'center',
    },
    tabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : darkBlue,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
  },
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
    path: 'deck/:slug',
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue,
      }
    }
  },
  QuizView: {
    screen: QuizView,
    path: 'quiz/:slug',
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    path: 'addCard/:slug',
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue,
      }
    }
  },
})

export default class App extends React.Component {

  componentDidMount(){
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <FlashCardStatusBar backgroundColor={ darkBlue } barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

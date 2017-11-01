import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { darkBlue, secondBlue, white } from '../utils/colors'
import { makeTitle } from '../utils/helpers'
import { connect } from 'react-redux'


// function QuizBtn ({ onPress, text, color }) {
//   return (
//     <TouchableOpacity
//       onPress={onPress}>
//       <Button=title{title}></Button>
//     </TouchableOpacity>
//   )
// }


class DeckView extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { slug }  = navigation.state.params
    const title = makeTitle(slug)
    return {
      title
    }
  }

  goToQuiz = ( slug ) => {
    console.log('slug :', slug)
    this.props.navigation.navigate (
      'Quiz',
      {slug}
    )
  }

  goToAddCard = () => {

  }

  render () {
    console.log("Deck View this.props :", this.props)
    const deck = this.props.currDeck
    console.log('deck:', deck)
    return (
      <View style={styles.container}>
        <View style={styles.centerContent}>
          <Text style={styles.header}>{deck.title}</Text>
          <Text>{deck.questions.length} Cards</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={()=> this.props.navigation.navigate(
              'QuizView',
              {slug: deck.slug}
            )}>
            <Text style={styles.buttonText}>AddCard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={()=> this.props.navigation.navigate(
              'AddCard',
              {slug: deck.slug}
            )}>
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gainsboro'
  },
  centerContent: {
    paddingTop: 40,
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    color: darkBlue,
    padding: 10,
  },
  button: {
    backgroundColor: darkBlue,
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText:{
    color: white,
    padding: 10,
    textAlign: 'center',
  },
})


function mapStateToProps ( state, { navigation }) {
  const { slug } = navigation.state.params
  return {
    currDeck : Object.keys(state).filter(deck => state[deck].slug === 'react').reduce((accum,key) => (accum[key] = state[key]), {})
  }
}

export default connect(
  mapStateToProps,
)(DeckView)


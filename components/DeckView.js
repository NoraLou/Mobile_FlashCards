import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { darkBlue, secondBlue, white } from '../utils/colors'
import { makeTitle } from '../utils/helpers'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'

class DeckView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { slug }  = navigation.state.params
    const title = makeTitle(slug)
    return {
      title
    }
  }

  render () {

    const deck = this.props.currDeck
    const isEmpty = Object.keys(deck).length === 0 ? true : false

    if (!isEmpty) {
      const hasQuestions = deck.questions.length === 0 ? false : true
      return (
        <View style={styles.container}>
          <View style={styles.centerContent}>
            <Text style={styles.header}>{deck.title}</Text>
            <Text style={[styles.header, {fontSize:20}]}>
              { hasQuestions
                ? `${deck.questions.length} Cards`
                : `Please add some questions to quiz yourself on.`
              }
            </Text>
           <TouchableOpacity
              disabled={ !hasQuestions }
              style={ hasQuestions ? styles.button : styles.disabled}
              onPress={()=> this.props.navigation.navigate(
                'QuizView',
                {slug: deck.slug}
              )}>
              <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=> this.props.navigation.navigate(
                'AddCard',
                {slug: deck.slug}
              )}>
              <Text style={styles.buttonText}>Add Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <AppLoading />
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
    fontSize: 30,
    color: darkBlue,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabled: {
    backgroundColor:'#A9A9A9',
    width: 200,
    marginTop: 10,
    marginBottom: 10,
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
    currDeck : Object.keys(state).filter(deck => state[deck].slug === slug).reduce((accum,key) => (accum[key] = state[key]), {})
  }
}

export default connect(
  mapStateToProps,
)(DeckView)


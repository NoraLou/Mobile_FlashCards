import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { darkBlue, secondBlue, white } from '../utils/colors'
import { makeTitle } from '../utils/helpers'
import { connect } from 'react-redux'
import TextButton from './TextButton'

class QuizView extends React.Component {

  static navigationOptions = {
    title : "Quiz"
  }

  defaultState = {
    questionIdx: 0,
    correct: 0,
    wrong: 0,
    showAnswer: false,
  }

  state = {
    ...this.defaultState
  }

  handleAnswer = (context) => {
    this.setState(() => ({
      questionIdx: this.state.questionIdx + 1,
      context: this.state[context]++,
    }))
  }

  toggleCardState = () => {
    //TODO Quick fade animation
    this.setState(() => ({showAnswer: !this.state.showAnswer}))
  }

  resetQuiz = () => {
    this.setState({
      ...this.defaultState
    })
  }

  render () {

    const deck = this.props.currDeck
    const { questions } = deck
    const totalCards = questions.length ? questions.length: 0

    let currQuestion = questions[this.state.questionIdx]

    let inProgress = (this.state.questionIdx < totalCards) ? true : false

    return (
      <View style={styles.container}>

        { inProgress ? (
          <View style={styles.centerContent}>
            <Text>{ `${(this.state.questionIdx + 1)} / ${totalCards}`}</Text>
            <View style={styles.cardItem}>
            { this.state.showAnswer ? (
                <View>
                  <Text style={styles.questionText}>{currQuestion.a}</Text>
                  <TextButton onPress={this.toggleCardState}>question</TextButton>
                </View>
              ):(
                <View>
                  <Text style={styles.questionText}>{currQuestion.q}</Text>
                  <TextButton onPress={this.toggleCardState}>answer</TextButton>
                </View>
              )
            }
            </View>
            <TouchableOpacity style={styles.button} onPress={()=> this.handleAnswer('correct')}>
              <Text style={styles.buttonText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> this.handleAnswer('wrong')}>
              <Text style={styles.buttonText}>Incorrect</Text>
            </TouchableOpacity>
          </View>

          ):(

          <View style={styles.centerContent}>
            <Text>{`You got ${ (((this.state.correct)/totalCards)*100) } percent correct`}</Text>
            <TouchableOpacity style={styles.button} onPress={this.resetQuiz}>
              <Text style={styles.buttonText}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={()=> this.props.navigation.navigate('DeckView', {slug: deck.slug})}>
              <Text style={styles.buttonText}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        )}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'gainsboro'
  },
  centerContent: {
    paddingTop: 40,
    alignItems: 'center',
  },
  cardItem: {
    backgroundColor: white,
    padding: 20,
    marginBottom: 40,
  },
  questionText: {
    fontSize: 35,
    textAlign: 'center',
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
    currDeck : Object.keys(state).filter(deck => state[deck].slug === slug).reduce((accum,key) => (accum[key] = state[key]), {})
  }
}


export default connect(
  mapStateToProps,
)(QuizView)

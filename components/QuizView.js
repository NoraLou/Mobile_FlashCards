import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { darkBlue, white, red, green } from '../utils/colors'
import { makeTitle } from '../utils/helpers'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { clearLocalNotification } from '../utils/helpers'


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
    const currQuestion = questions[this.state.questionIdx]
    const inProgress = (this.state.questionIdx < totalCards) ? true : false


    if (!inProgress) {
      clearLocalNotification()
      return (
        <View style={styles.container}>
          <View style={styles.cardItem}>
            <Text style={styles.questionText}>{`You got ${ Math.round((((this.state.correct)/totalCards)*100)) } percent correct`}</Text>
          </View>
          <View style={styles.centerContent}>
            <TouchableOpacity style={styles.button} onPress={this.resetQuiz}>
              <Text style={styles.buttonText}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={()=> this.props.navigation.navigate('DeckView', {slug: deck.slug})}>
              <Text style={styles.buttonText}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={{ fontSize:20, color: darkBlue, paddingBottom: 20}}>
          { `${(this.state.questionIdx + 1)} / ${totalCards}`}
        </Text>
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
        <View style={styles.centerContent}>
          <TouchableOpacity style={[styles.button, {backgroundColor:green}]} onPress={()=> this.handleAnswer('correct')}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor:red}]} onPress={()=> this.handleAnswer('wrong')}>
            <Text style={styles.buttonText}>Incorrect</Text>
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
    alignItems:'center',
  },
  cardItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderColor: darkBlue,
    justifyContent: 'center',
    alignItems:'center',
    height: 150,
    backgroundColor: white,
    shadowColor:'rgba(8, 76, 97, 0.5)',
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  questionText: {
    fontSize: 20,
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

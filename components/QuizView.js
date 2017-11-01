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

  showAnswer = () => {
    console.log("show-answer")
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.centerContent}>

          <View style={styles.cardItem}>
            <Text style={styles.questionText}>Does React Native work with Android ?</Text>
            <TextButton>answer</TextButton>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
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


function mapStateToProps ( state ) {
  return {
    state
  }
}

export default connect(
  mapStateToProps,
)(QuizView)

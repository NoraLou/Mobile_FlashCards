import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Platform } from 'react-native'
import { darkBlue, secondBlue, white, green } from '../utils/colors'
import { connect } from 'react-redux'
import TextButton from './TextButton'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={{color: white}}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      question: 'add your question',
      answer: 'add the answer'
    }
  }

  static navigationOptions = {
    title : "Add A Card"
  }

  submit = () => {
    console.log("submit!")
  }

  render () {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>Create a New Card</Text>
          <TextInput
              style={styles.formInput}
              onChangeText={(question) => this.setState({question})}
              value={this.state.question}/>
          <TextInput
              style={styles.formInput}
              onChangeText={(answer) => this.setState({answer})}
              value={this.state.answer}/>
          <SubmitBtn onPress={this.submit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  header: {
    textAlign: 'center',
    color: darkBlue,
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  formInput: {
    borderColor: darkBlue,
    borderWidth: 1,
    padding: 15,
    height: 50,
    marginTop: 20,
  },
  iosSubmitBtn: {
    backgroundColor: darkBlue,
    alignItems: 'center',
    padding: 10,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  AndroidSubmitBtn: {
    backgroundColor: green,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
})












function mapStateToProps ( state ) {
  return {
    state
  }
}

export default connect(
  mapStateToProps,
)(AddCard)

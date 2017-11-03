import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Alert, KeyboardAvoidingView } from 'react-native'
import { darkBlue, white, red} from '../utils/colors'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { addCardToDeck } from '../actions'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.submitBtn}
      onPress={onPress}>
        <Text style={{color: white}}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      q: '',
      a: '',
    }
  }

  static navigationOptions = {
    title : "Add A Card"
  }

  submit = () => {
    const hasError = (this.state.a == false || this.state.b == false)
    if (hasError) {
      Alert.alert(
        'Error Saving!',
        'You must have text in both fields',
        [
          {text: 'Complete Card'},
        ],
      )
      return false
    }
    const deckKey = Object.keys(this.props.currDeck)[0]
    const question = {
      q : this.state.q,
      a : this.state.a
    }
    this.props.dispatch(addCardToDeck(deckKey, question))
    this.props.navigation.goBack()
  }

  render () {
    return (
      <KeyboardAvoidingView style={styles.container}>
          <Text style={styles.header}>Create a New Card</Text>
          <Text style={styles.label}>Your Question:</Text>
          <TextInput
              style={styles.formInput}
              onChangeText={(q) => this.setState({q})}
              value={this.state.q}/>
           <Text style={styles.label}>Your Answer:</Text>
          <TextInput
              style={styles.formInput}
              onChangeText={(a) => this.setState({a})}
              value={this.state.a}/>
          <SubmitBtn onPress={this.submit} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gainsboro',
  },
  header: {
    textAlign: 'center',
    color: darkBlue,
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  label: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 5,
    color: darkBlue,
    fontWeight: 'bold',
  },
  formInput: {
    borderColor: darkBlue,
    borderWidth: 1,
    padding: 15,
    height: 50,
    backgroundColor: white,
  },
  submitBtn: {
    backgroundColor: darkBlue,
    alignItems: 'center',
    padding: 10,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
  },
})

function mapStateToProps ( state, { navigation }) {
  const { slug } = navigation.state.params
  return {
    currDeck : Object.keys(state).filter(deck => state[deck].slug === slug)
              .reduce((accum,key) => {
                accum[key] = state[key]
                return accum
               },{})
  }
}

export default connect(
  mapStateToProps,
)(AddCard)


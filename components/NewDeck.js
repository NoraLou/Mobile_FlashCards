import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native'
import { darkBlue, green, white } from '../utils/colors'
import { addDeck } from '../actions'
import { connect } from 'react-redux'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.submitBtn}
      onPress={onPress}>
        <Text style={{color: white}}>CREATE DECK</Text>
    </TouchableOpacity>
  )
}

class NewDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: ''}
  }

  submit = () => {
    const title = this.state.text
    const hasErr = (this.state.text == false)
    if (hasErr) {
      Alert.alert(
        'Error Saving!',
        'You must have text in the Title field',
        [
          {text: 'Complete Title'},
        ],
      )
      return false
    }
    this.props.dispatch(addDeck(title))
    this.props.navigation.goBack()
  }


  render () {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <Text style={styles.formLabel}>Enter Your Deck Title</Text>
          <TextInput
              style={styles.formInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
          </View>
          <SubmitBtn onPress={this.submit} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  formContainer: {
    alignItems:'stretch',
  },
  formLabel: {
    textAlign: 'center',
    color: darkBlue,
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  formInput: {
    borderColor: darkBlue,
    borderWidth: 1,
    padding: 15,
    height: 50,
    backgroundColor: 'white',
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

export default connect(
  null,
)(NewDeck)


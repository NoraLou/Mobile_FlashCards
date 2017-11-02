import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Platform } from 'react-native'
import { darkBlue, secondBlue, white, green } from '../utils/colors'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { addCardToDeck } from '../actions'

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
      q: '',
      a: ''
    }
  }

  static navigationOptions = {
    title : "Add A Card"
  }

  submit = () => {

    //TODO : validation
    const deckKey = Object.keys(this.props.currDeck)[0]
    const question = {
      q : this.state.q,
      a : this.state.a
    }
    this.props.dispatch(addCardToDeck(deckKey, question))
    //TODO: success message
    this.props.navigation.goBack()

  }

  render () {

    //console.log('this.props.currDeck' , this.props.currDeck)
    return (
      <View style={styles.container}>
          <Text style={styles.header}>Create a New Card</Text>
          <TextInput
              style={styles.formInput}
              onChangeText={(q) => this.setState({q})}
              value={this.state.q}/>
          <TextInput
              style={styles.formInput}
              onChangeText={(a) => this.setState({a})}
              value={this.state.a}/>
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


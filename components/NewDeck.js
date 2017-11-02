import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, Button} from 'react-native'
import { darkBlue, green, white } from '../utils/colors'
import { addDeck } from '../actions'
import { connect } from 'react-redux'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={{color: white}}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class NewDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Deck Title'}
  }

  submit = () => {
    const title = this.state.text
    //TODO: validation
    console.log("title :", title)
    this.props.dispatch(addDeck(title))
    //TODO: success message
    this.props.navigation.goBack()
  }


  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.formLabel}>Enter Your Deck Name</Text>
          <TextInput
              style={styles.formInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
          </View>
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
  formContainer: {
    alignItems:'stretch',
  },
  formLabel: {
    textAlign: 'center',
    color: darkBlue,
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },
  formInput: {
    borderColor: darkBlue,
    borderWidth: 1,
    padding: 15,
    height: 50,
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

// function mapStateToProps ( decks) {
//   return {
//     decks : Object.keys(decks).map(title => decks[title])
//   }
// }

export default connect(
  null,
)(NewDeck)


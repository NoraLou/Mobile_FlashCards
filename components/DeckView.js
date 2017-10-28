import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { darkBlue, secondBlue, white } from '../utils/colors'


// function QuizBtn ({ onPress, text, color }) {
//   return (
//     <TouchableOpacity
//       onPress={onPress}>
//         <Text style={}>SUBMIT</Text>
//     </TouchableOpacity>
//   )
// }

class DeckView extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor:'pink'}}>quiz details</Text>

        <View style={styles.centerContent}>
          <Text style={styles.header}>Udaci-Cards</Text>
          <Text>3 cards</Text>
          <TouchableOpacity>
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Start Quiz</Text>
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
})

export default DeckView


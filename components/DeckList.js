import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { darkBlue, secondBlue, white } from '../utils/colors'

class DeckList extends React.Component {

  render () {
    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.row}
          onPress={()=>console.log('this.props.navigate :', this.props.navigate)}>
          <View style={styles.deckStats}>
            <Text style={styles.header}>Linux Command Line</Text>
            <Text style={styles.subHead}>Cards 3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={()=>console.log('this.props.navigate :', this.props.navigate)}>
          <View style={styles.deckStats}>
            <Text style={styles.header}>Linux Command Line</Text>
            <Text style={styles.subHead}>Cards 3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={()=>console.log('this.props.navigate :', this.props.navigate)}>
          <View style={styles.deckStats}>
            <Text style={styles.header}>Linux Command Line</Text>
            <Text style={styles.subHead}>Cards 3</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    backgroundColor: white,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: darkBlue,
    justifyContent: 'center',
    alignItems:'center',
  },
  deckStats: {
    alignItems:'center',
  },
  header: {
    fontSize: 24,
    color: darkBlue,
    padding: 10,
  },
  subHead: {
    fontSize: 20,
    padding: 10,
    color: secondBlue,
  },
})



export default DeckList

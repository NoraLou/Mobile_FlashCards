import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { darkBlue, secondBlue, white } from '../utils/colors'

class DeckList extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.deckStats}>
            <Text style={styles.header}>Linux Command Line</Text>
            <Text style={styles.subHead}>Cards 3</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.deckStats}>
            <Text style={styles.header}>Linux Command Line</Text>
            <Text style={styles.subHead}>Cards 3</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.deckStats}>
            <Text style={styles.header}>Linux Command Line</Text>
            <Text style={styles.subHead}>Cards 3</Text>
          </View>
        </View>
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

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { darkBlue, secondBlue, white } from '../utils/colors'
import { fetchAllDecks } from '../actions'

class DeckList extends React.Component {

  state = {
    ready: false
  }

  componentDidMount () {
    this.props.dispatch(fetchAllDecks())
  }

  render () {
    const { decks } = this.props
    return (
      <View style={styles.container}>
       {decks.map((d) => (
          <TouchableOpacity key={d.title}
            style={styles.row}
            onPress={()=>console.log('you clicked me!')}>
            <View style={styles.deckStats}>
              <Text style={styles.header}>{d.title}</Text>
              <Text style={styles.subHead}>{d.questions.length}</Text>
            </View>
          </TouchableOpacity>
        ))}
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

function mapStateToProps ( decks) {
  return {
    decks : Object.keys(decks).map(title => decks[title])
  }
}

export default connect(
  mapStateToProps,
)(DeckList)


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native'
import { connect } from 'react-redux'
import { darkBlue, secondBlue, white } from '../utils/colors'
import { fetchAllDecks } from '../actions'



const DeckItem = (props) => {
  const deckItem = this.props
  console.log("deckItem :", deckItem)
  return (
    <Text>Balls</Text>
    // <TouchableOpacity
    //   style={styles.row}
    //   onPress={()=> this.props.navigation.navigate(
    //   'DeckView',
    //   {slug: deckItem.slug}
    //  )}>
    //   <View style={styles.deckItemStats}>
    //     <Text style={styles.header}>{deckItem.title}</Text>
    //     <Text style={styles.subHead}>{deckItem.questions.length}</Text>
    //   </View>
    // </TouchableOpacity>
  )
}


class DeckList extends React.Component {

  state = {
    ready: false
  }

  componentDidMount () {
    this.props.dispatch(fetchAllDecks())
  }

  render () {
    console.log("Deck List this.props :", this.props)
    const { decks } = this.props
    return (
      <View style={styles.container}>
       {decks.map((deck) => (
         <DeckItem deckItem={deck} navigation={this.props.navigation} />
         // <Text key={deck.id}>{deck.title}</Text>
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: darkBlue,
    justifyContent: 'center',
    alignItems:'center',
    height: 150,
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


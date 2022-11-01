import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import * as Speech from 'expo-speech';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

var temporaryStorageArray;

export default class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      searchedWords: [],
      frequentlyUsedWords: [],
    };
  }
  speakEn = (word) => {
    Speech.speak(word, { language: 'en' });
  };
  speakFr = (word) => {
    Speech.speak(word, { language: 'fr' });
  };

  componentDidMount() {
    db.ref('frequentlyUsedWords/' + firebase.auth().currentUser.uid).on(
      'value',
      (data) => {
        var temp = data.val();
        if (data.val()) {
          var tempArray = [];
          Object.keys(temp).map((word) => {
            tempArray.push(temp[word]);
          });
          this.setState({ frequentlyUsedWords: tempArray });
        }
      }
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainerBack}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Lang</Text>
              <Image
                source={require('../assets/logoLangling-removebg-preview.png')}
                style={styles.headerImage}
              />
              <Text style={styles.headerText}>ling</Text>
            </View>
          </View>
          {this.state.frequentlyUsedWords.length == 0 ? (
            <Text style={styles.noCardsBruh}>No Flashcards Saved...</Text>
          ) : null}
          <View style={styles.listContainer}>
            <FlatList
              data={this.state.frequentlyUsedWords}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.list}>
                    <TouchableOpacity
                      style={styles.object}
                      onPress={() => {
                        this.speakEn(item.englishWord);
                        this.speakFr(item.frenchWord);
                      }}>
                      <View style={styles.objectobjectE}>
                        <Text style={styles.objectText}>
                          {item.englishWord}
                        </Text>
                      </View>
                      <View style={styles.objectobjectF}>
                        <Text style={styles.objectText}>{item.frenchWord}</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.trashBox}>
                      <TouchableOpacity
                        /*onPress={() => {
                          db.ref(
                            'frequentlyUsedWords/' +
                              firebase.auth().currentUser.uid + "/" + firebase.auth().------.uid
                          ).remove();
                        }}*/>
                        <Icon
                          style={styles.trashIcon}
                          name="trash-bin-outline"
                          size={RFValue(30)}></Icon>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <View style={{ marginTop: 700 }}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#323737',
  },
  list: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  trashIcon: {
    marginTop: '30',
    color: 'white',
  },
  trashBox: {
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  headerImage: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  headerText: {
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },
  headerContainerBack: {
    backgroundColor: '#9DBBD8',
  },
  object: {
    padding: 10,
    width: '70%',
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  objectText: {
    fontSize: 15,
    color: 'black',
  },
  objectobjectF: {
    position: 'absolute',
    right: 30,
    bottom: 10,
  },
  objectobjectE: {
    marginLeft: 20,
  },
  listContainer: {
    marginTop: 20,
  },
  noCardsBruh: {
    fontFamily: 'Avenir Next',
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
  }
});

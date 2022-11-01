import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import * as Speech from 'expo-speech';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Speak extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writtenWord: '',
      french: false,
    };
  }
  speak = (word) => {
    var lang = this.state.french ? 'fr' : 'en';
    Speech.speak(word, { language: lang });
  };

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
          <View style={styles.switchbox}>
            <Text
              style={
                this.state.french
                  ? [styles.switchText1, { color: 'white' }]
                  : [styles.switchText1, { color: '#3498DB' }]
              }>
              English
            </Text>
            <Switch
              value={this.state.french}
              onValueChange={() => {
                var currentState = this.state.french;
                this.setState({
                  french: !currentState,
                  //frenchWord: '',
                  //englishWord: '',
                });
              }}
            />
            <Text
              style={
                this.state.french === false
                  ? [styles.switchText2, { color: 'white' }]
                  : [styles.switchText2, { color: '#3498DB' }]
              }>
              French
            </Text>
          </View>
          <TextInput
            multiline={true}
            placeholder={
              this.state.french
                ? 'French Word/Sentence'
                : 'English Word/Sentence'
            }
            style={styles.inputFrench}
            onChangeText={(text) => {
              this.setState({ writtenWord: text });
            }}
            placeholderTextColor="#c7c7c7"
          />
          <View style={styles.submitbuttonContainer}>
            <TouchableOpacity
              style={styles.submitbutton}
              onPress={() => {
                this.speak(this.state.writtenWord);
              }}>
              <Text style={styles.submitbuttonText}>Speak</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rulesBox}>
            <Text style={styles.rules}>
              To improve your pronunciation, here are four important rules you
              must know…
            </Text>
            <Text style={styles.rules}>1. The French “R” Sound</Text>
            <Text style={styles.rules}>
              To make this sound, you want to use your throat to try to make the
              noise when you gargle, but on a smaller scale. Try hearing it by
              entering a word like arriver (to arrive) and vraiment (really)
              into the input.
            </Text>
            <Text style={styles.rules}>2. The French “U” Sound</Text>
            <Text style={styles.rules}>
              To pronounce it, make an “ee” sound in English and hold it out,
              then make your lips into a circle. There is also an “ou” vowel in
              French which is slightly different. To pronounce the “ou” sound,
              say “soup” and remove the consonants. Try entering jus (juice) and
              joue (play) in the input to hear the difference.
            </Text>
            <Text style={styles.rules}>3. The French Silent Letters</Text>
            <Text style={styles.rules}>
              In the French language, you usually do not pronounce the last
              letter of a word. However, there are exceptions: “b, c, f, l, q,”
              and “r” are usually pronounced at the end of a French word. To try
              this, enter actif (active) and poulet (chicken) to hear the
              difference.
            </Text>
            <Text style={styles.rules}>4. The French “H” Sound</Text>
            <Text style={styles.rules}>
              Sometimes the French “H” is treated like a vowel or a consonant.
              When “H” is a vowel, the “H” in hôpital (hospital) is silent and
              if you were to say the hospital you would say l’hôpital. If “H” is
              a consonant, the hamburger would be le hamburger and you still
              would not pronounce the “H.” To hear these two words, try entering
              them into the input.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 1500,
    backgroundColor: '#323737',
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
  inputFrench: {
    borderRadius: 15,
    padding: 15,
    borderWidth: 5,
    width: '80%',
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: '#3498DB',
  },
  submitbutton: {
    backgroundColor: '#9DBBD8',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  submitbuttonContainer: {
    padding: 25,
    marginTop: -25,
    marginBottom: -20,
  },
  submitbuttonText: {
    alignSelf: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 20,
    color: 'white',
  },
  switchbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  switchText1: {
    fontSize: 15,
    marginRight: 10,
  },
  switchText2: {
    fontSize: 15,
    marginLeft: 10,
  },
  rulesBox: {
    padding: RFValue(20),
  },
  rules: {
    alignSelf: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
});

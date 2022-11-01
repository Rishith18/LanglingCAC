import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { RFValue } from 'react-native-responsive-fontsize';

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      signUpOpen: false,
    };
  }

  login = async () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
        console.log('hello');
        this.props.navigation.navigate('DashBoard');
      })
      .catch((error) => {
        console.log(error.message);
        return Alert.alert(error.message);
      });
  };

  signUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
        firebase
          .database()
          .ref('users/' + firebase.auth().currentUser.uid)
          .set({
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
          });
        this.props.navigation.navigate('DashBoard');
      })
      .catch((error) => {
        console.log(error.message);
        return Alert.alert(error.message);
      });
  };

  render() {
    if (this.state.signUpOpen === false) {
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
          <TextInput
            placeholder="Email"
            placeholderTextColor="#c7c7c7"
            style={styles.emailInput}
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#c7c7c7"
            style={styles.passwordInput}
            secureTextEntry
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.login();
            }}>
            <Text style={styles.submitButtonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.setState({ signUpOpen: true });
            }}>
            <Text style={styles.submitButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.coolTextBox}>
            <Text style={styles.coolText}>
              Join a translating experience like no other...
            </Text>
          </View>
          <Image
            source={require('../assets/signinPageImageGood.png')}
            style={styles.coolImage}
          />
          <Text style={styles.hello}>Hello!</Text>
          <Text style={styles.bonjour}>Bonjour!</Text>
        </View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
        <View style={styles.container2}>
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
          <TextInput
            placeholder="Email"
            placeholderTextColor="#c7c7c7"
            style={styles.emailInput}
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#c7c7c7"
            style={styles.passwordInput}
            secureTextEntry
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#c7c7c7"
            secureTextEntry
            style={styles.passwordInput}
            onChangeText={(text) => {
              this.setState({ confirmPassword: text });
            }}
          />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#c7c7c7"
            style={styles.passwordInput}
            onChangeText={(text) => {
              this.setState({ firstName: text });
            }}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#c7c7c7"
            style={styles.passwordInput}
            onChangeText={(text) => {
              this.setState({ lastName: text });
            }}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.signUp();
            }}>
            <Text style={styles.submitButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.setState({ signUpOpen: false });
            }}>
            <Text style={styles.submitButtonText}>Cancel</Text>
          </TouchableOpacity>
          <View style={styles.coolTextBox}>
            <Text style={styles.coolText}>
              Join a translating experience like no other...
            </Text>
          </View>
        </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323737",
    height: "153%",
  },
  container2: {
    backgroundColor: "#323737",
    height: "153%",
  },
  emailInput: {
    borderColor: "#3498DB",
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 50,
    marginTop: 40,
    backgroundColor: 'white',
  },
  passwordInput: {
    borderColor: '#3498DB',
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 50,
    backgroundColor: 'white',
  },
  submitButton: {
    backgroundColor: '#9DBBD8',
    padding: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 40,
    marginHorizontal: 50,
  },
  submitButtonText: {
    alignSelf: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 20,
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
    color: "white",
  },
  headerContainerBack: {
    backgroundColor: '#9DBBD8',
  },
  coolImage: {
    width: RFValue(330),
    height: RFValue(250),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  coolText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    fontSize: RFValue(27),
    padding: 15,
    color: 'white',
    marginTop: 6,
    fontStyle: 'italic',
  },
  coolTextBox: {
    
  },
  bonjour: {
    position: 'absolute',
    left: RFValue(73),
    bottom: RFValue(216),
    fontSize: RFValue(20),
    color: 'white',
    fontFamily: 'Avenir Next',
  },
  hello: {
    position: 'absolute',
    left: RFValue(201),
    bottom: RFValue(216),
    fontSize: RFValue(20),
    color: 'white',
    fontFamily: 'Avenir Next',
  }
});

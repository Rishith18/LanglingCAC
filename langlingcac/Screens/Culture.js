import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class App extends React.Component {
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

          <View style={styles.openingTextBox}>
            <Text style={styles.openingText}>
              Throughout France’s thousand year history, the country has become
              one of the most iconic European powers. Not only has France been
              historically one of the most influential countries, but they have
              become a symbol of fashion, food, art, and a cultural center in
              the modern world.
            </Text>
          </View>
          <Image
            source={require('../assets/IDKFRANCE.jpeg')}
            style={styles.frenchImage1}
          />
          <Image
            source={require('../assets/FRANCEWHAAAA.jpeg')}
            style={styles.frenchImage2}
          />
          <View style={styles.openingTextBox}>
            <Text style={styles.openingText}>
              Perhaps the most famous place in France: Paris. Paris is home to
              some of the most luxurious brands in the world such as Louis
              Vuitton, Chanel, Hermes, and Dior. This majestical place also
              houses the Lourve, one of the largest art museums in the world and
              is the home of the Mona Lisa and the Venus De Milo. Paris is also
              known for its Eiffel Tower–La Tour Eiffel in french–and its Avenue
              des Champs-Élysées.
            </Text>
          </View>
          <Image
            source={require('../assets/LATOUREIFFEL.jpeg')}
            style={styles.frenchImage3}
          />
          <View style={styles.openingTextBox}>
            <Text style={styles.openingText}>
              France is also the center of fabulous cuisine such as crepes
              suzette or potatoes dauphinoise. In fact, Food is extremely
              central to French culture and many conversations involve talking
              over a lengthy dinner.
            </Text>
          </View>
          <Image
            source={require('../assets/CREPELEPELEPLE.jpeg')}
            style={styles.frenchImage4}
          />
        </View>
        <View style={{ marginTop: 200 }}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
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
  openingTextBox: {
    padding: 20,
  },
  openingText: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: 'Avenir Next',
    color: 'white',
  },
  frenchImage1: {
    height: RFValue(180),
    width: RFValue(280),
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: "#3498DB",
    borderRadius: 20,
  },
  frenchImage2: {
    height: RFValue(150),
    width: RFValue(280),
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 5,
    borderColor: "#3498DB",
    borderRadius: 20,
  },
  frenchImage3: {
    height: RFValue(160),
    width: RFValue(280),
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: "#3498DB",
    borderRadius: 20,
  },
  frenchImage4: {
    height: RFValue(150),
    width: RFValue(280),
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: "#3498DB",
    borderRadius: 20,
  },
});

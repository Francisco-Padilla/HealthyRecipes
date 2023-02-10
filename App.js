import * as React from 'react';
import { StyleSheet,Text, View, TextInput, Pressable ,Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import D_Image from './assets/bruschetta.png';

function HomeScreen({ navigation }) {
  const [number, changenumber] = React.useState()
  const D_IMAGE = Image.resolveAssetSource(D_Image).uri;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.pageTitle}>Bruschetta Recipe</Text>
      <Image style = {styles.image} source={{uri: D_IMAGE}} />
      <TextInput  style={styles.textinput} placeholder ="Enter the Number of Servings" 
        onChangeText={changenumber}
        value={number}
      />
      <Pressable
        style ={styles.button}
        onPress={() => {
          navigation.navigate('Recipe', {
            itemId: number
          });
        }}
      >
        <Text style={styles.buttonText} >View Recipe</Text>
      </Pressable>
    </View>
  );
}

function RecipeScreen({ route, navigation }) {
 
  const { itemId } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={styles.pageTitle}>Bruschetta</Text>
      <Text style={styles.subTitles}>Ingredients </Text>
      <Text style={styles.recipeText}>{JSON.stringify(itemId * 4)} plum tomatoes</Text>
      <Text style={styles.recipeText}>{JSON.stringify(itemId * 6)} basil leaves</Text>
      <Text style={styles.recipeText}>{JSON.stringify(itemId * 3)} garlic cloves, chopped</Text>
      <Text style={styles.recipeText}>{JSON.stringify(itemId * 3)} TB olive oil</Text>
      <Text style={styles.subTitles}>Directions</Text>
      <Text style={styles.recipeText}>Combine the ingredients. add salt to taste. Top 
        French bread slices with mixture
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
            title: 'Healthy Recipes',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }} />
        <Stack.Screen name="Recipe" component={RecipeScreen}
        options={{
          title: 'Healthy Recipes',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
 
}
const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 50,
    textAlign: 'center',
    paddingBottom:20
  },
  subTitles: {

    fontSize: 35,
    textAlign: 'left',
    paddingLeft: 30
  },
  recipeText: {
    fontSize: 30,
    textAlign: 'left',
    paddingLeft: 40
  },
  textinput: {
    height: 70,
    width: 300,
    fontSize: 20,
    textAlign: 'center',
      
  },
  button: {
    height: 50,
    width: 240,
    borderColor:'gray',
    backgroundColor: 'gray',
    borderWidth: 1 
    
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 34,
    color: 'white',
    textAlign: 'center'
  },
  image: {
    width: 400,
    height: 300,
  }
});

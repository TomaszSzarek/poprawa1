import { StyleSheet, Text, View,Pressable,TextInput  } from 'react-native';
import axios from 'axios';
import { Url } from './GlobalURL.js';
import { globalData } from './GlobalID';

let nazwa = "";
let haslo = "";

const inputNazwa = (text) => {
  nazwa = text;
};

const inputHaslo = (text) => {
  haslo = text;
};
async function zaloguj(navigation, nazwa, haslo) {
  try {
    const response = await axios.get(`${Url}/user?nazwa=${nazwa}&haslo=${haslo}`);
    if (response.status === 200) {
      const responseData = response.data;
      console.log(responseData);
      if(responseData.length !== 0){
        console.log('Zalogowano pomyślnie:');
        var userId = responseData[0].id;
        globalData.USERID = userId;
        navigation.navigate('TabNav');
      }
    } else {
      console.error('Błąd logowania:', response.data);
    }
  } catch (error) {
    console.error('Błąd sieci:', error);
  }
}


export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
          style={styles.input}
          onChangeText={inputNazwa}
          placeholder="nazwa"
        />
        <TextInput
          style={styles.input}
          onChangeText={inputHaslo}
          placeholder="hasło"
        />
      <Pressable style={styles.Btn} onPress={() => zaloguj(navigation,nazwa,haslo)}>
                <Text style={styles.Text}>Dalej</Text>
            </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn: {
    marginTop: 20,
  },
  Text: {
    color: 'white',
    textAlign: 'center',
  },
});
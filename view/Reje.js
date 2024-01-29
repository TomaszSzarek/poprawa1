import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native';
import axios from 'axios';
import { Url } from './GlobalURL';
let nazwa = "";
let haslo = "";

const inputNazwa = (text) => {
  nazwa = text;
};

const inputHaslo = (text) => {
  haslo = text;
};

const wyslij = async (navigation) => {
  const daneReje = {
    haslo: haslo,
    nazwa: nazwa,
  };
  const response = await axios.post(`${Url}/user`, daneReje);
  navigation.navigate('Start');
}

export default function Reje({navigation}) {
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
      <Pressable style={styles.Btn} onPress={() => wyslij(navigation)}>
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

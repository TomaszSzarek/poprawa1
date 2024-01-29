import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Url } from './GlobalURL.js';
import { globalData } from './GlobalID';
import SumaKomponent from './Suma.js';
export default function Widok0() {
  let sumA= 10;
  let sumB= 20;
  let suma;
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const getAuthenticatedUser = async () => {
    try {
      const response = await axios.get(`${Url}/user/${globalData.USERID}`);
      console.log(response.data);
      setAuthenticatedUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAuthenticatedUser();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Widok0</Text>
      {authenticatedUser && (
        <View>
          <Text>Nazwa: {authenticatedUser.nazwa}</Text>
          <Text>Hasło: {authenticatedUser.haslo}</Text>
          <SumaKomponent sumA={sumA} sumB={sumB} />
        </View>
      )}
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
  Text: {
    color: 'white',
    textAlign: 'center',
  },
});

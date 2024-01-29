import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from "react";

export default function Widok0() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const getAuthenticatedUser = async () => {
    try {
      const response = await axios.get(`${serverUrl}/user/${GLOBAL.USERID}`);
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

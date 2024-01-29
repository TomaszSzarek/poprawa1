import { StyleSheet, Text, View,Pressable } from 'react-native';

export default function Widok1({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Start</Text>
      <Pressable style={styles.Btn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.Text}>Login</Text>
            </Pressable>
            <Pressable style={styles.Btn} onPress={() => navigation.navigate('Reje')}>
                <Text style={styles.Text}>Reje</Text>
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

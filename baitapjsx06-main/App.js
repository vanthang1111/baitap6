import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TextInput} from 'react-native';
import Intro from './wellcome/intro';
import Signup from './wellcome/signup';
import Signin from './wellcome/signin';
export default function App() {
  return (
    <View>
      <Intro/>
      <Signup/>
      <Signin/>
      <StatusBar style="auto" />

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
});

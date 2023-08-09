import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  GuessTheWinner  from './componetes/GuessComponent'



export default function App() {
  const teams = [ 'Benfica','Inter','Man City','Bayern', 'Real Madrid', 'Chelsea'];
  return (
   <View>
    <GuessTheWinner Teams={teams}/>
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





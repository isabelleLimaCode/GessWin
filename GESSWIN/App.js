import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import  GuessTheWinner  from './componetes/GuessComponent'
import { useState } from 'react';



export default function App() {
  const teams = [ 'Benfica','Inter','Man City','Bayern', 'Real Madrid', 'Chelsea'];
  const [showGesscompt,SetshowGesscompt] = useState(false);
  const GuessComponent = () => {
    SetshowGesscompt(!showGesscompt);
    
  };

  const backmenu = () =>{

    SetshowGesscompt(!showGesscompt);
  }

  return (
   <View>
    {showGesscompt ? (
       <View>
      <GuessTheWinner Teams={teams} />
      <Image style={{width:300,height:300,marginBottom:10,alignSelf:'center',marginTop:30}} source={require('./assets/winn.gif')}/> 
       <TouchableOpacity
       onPress={GuessComponent}
       style={{  width:350,
         fontSize: 15,
         padding: 10,
         backgroundColor: '#3C464E',
         borderRadius: 50,
         color:'#fff',
         top:70,
         alignSelf:'center'}}>
       <Text style ={{color:'#059669', alignSelf:'center', borderRadius:20}}>Gess the winner again ! </Text>
     </TouchableOpacity>
     </View>
    ): (
      <View>
       <Image style={{width:300,height:300,marginBottom:10,alignSelf:'center',marginTop:30}} source={require('./assets/GESS.gif')}/> 
        <TouchableOpacity
        onPress={GuessComponent}
        style={{  width:350,
          fontSize: 15,
          padding: 10,
          backgroundColor: '#3C464E',
          borderRadius: 50,
          color:'#fff',
          top:100,
          alignSelf:'center'}}>
        <Text style ={{color:'#059669', alignSelf:'center', borderRadius:20}}>Gess the winner! </Text>
      </TouchableOpacity>
    </View>
    )}
  
   </View>
  );
}







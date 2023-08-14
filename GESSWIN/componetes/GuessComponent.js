import * as React from 'react';
import { Text, View } from 'react-native';

function GuessTheWinner({ Teams }) {
  const Index = Math.floor(Math.random() * Teams.length);
  let winner = Teams[Index];

  return (
    <View>
      <Text style={{ padding: 40, fontSize: 30, color: 'black' }}>
        The winner will be {winner}
      </Text>
    </View>
  );
}

export default GuessTheWinner;

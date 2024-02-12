import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HangmanWordSelect from './components/HangmanWordSelect';
import StartingPage from './components/StartingPage';
import { useState } from 'react';
import GamePage from './components/GamePage';
import GameOver from './components/GameOver';

export default function App() {
  const [gameStart,setGameStart] = useState(false);
  const [wordSelect,setWorldSelect] = useState(null);
  const [gameOver,setGameOver] = useState(false);
  const [winner,setWinner] = useState(false)
  return (
      <>
       {!gameStart && !wordSelect && <StartingPage setGameStart={setGameStart}></StartingPage>}
       {gameStart && !wordSelect && <HangmanWordSelect setWorldSelect={setWorldSelect} setGameStart={setGameStart}></HangmanWordSelect>}
       {gameStart && wordSelect && !gameOver && <GamePage setWinner={setWinner} setGameOver={setGameOver} wordSelect={wordSelect}></GamePage>}
       {gameOver && <GameOver wordSelect={wordSelect} winner={winner} setWinner={setWinner} setGameStart={setGameStart} setWorldSelect={setWorldSelect} setGameOver={setGameOver}></GameOver>}
      </>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#541da3',
  },
  textData:{
     fontSize:20,
     marginVertical:20
  }
});
 {/* <Text style={styles.textData}>Choose a word for your opponent</Text>
      <HangmanWordSelect></HangmanWordSelect> */}
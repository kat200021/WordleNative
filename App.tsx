import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import WordleGrid from './components/WordleGrid';
import { checkGuess } from './utils/checkGuess';
import wordList from './data/wordList';
import Keyboard from './components/Keyboard';


const App = () => {
  const [solution, setSolution] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState<{ word: string; result: string[] }[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  // pick a random word at the start
  useEffect(() => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setSolution(randomWord);
  }, []);

  const handleNewGame = () => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setSolution(randomWord);
    setGuesses([]);
    setCurrentGuess('');
    setIsGameOver(false);
  };  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Guess the 5-letter word</Text>
      <WordleGrid guesses={guesses} currentGuess={currentGuess} />
      
      {/* End Message */}
      {isGameOver && (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.endMessage}>
            {guesses[guesses.length - 1]?.word === solution
              ? '🎉 You win!'
              : `😞 The word was: ${solution}`}
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleNewGame}>
            <Text style={styles.buttonText}>🔄 Play Again</Text>
          </TouchableOpacity>
        </View>
      )}

      <Keyboard onKeyPress={(key) => {
        if (key === '⌫') {
          setCurrentGuess((prev) => prev.slice(0, -1));
        } else if (key === 'ENTER') {
          if (currentGuess.length === 5) {
            const result = checkGuess(currentGuess, solution);
            const newGuesses = [...guesses, { word: currentGuess, result }];
            setGuesses(newGuesses);
            setCurrentGuess('');
            if (currentGuess === solution || newGuesses.length === 6) {
              setIsGameOver(true);
            }
          }
        } else if (/^[a-zA-Z]$/.test(key)) {
          if (currentGuess.length < 5 && !isGameOver) {
            setCurrentGuess((prev) => prev + key.toLowerCase());
          }
        }
      }} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold' },
  endMessage: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },  
});

export default App;

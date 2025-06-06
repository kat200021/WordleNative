import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  guesses: { word: string; result: string[] }[];
  currentGuess: string;
};

const WordleGrid: React.FC<Props> = ({ guesses, currentGuess }) => {
  const totalRows = 6;

  return (
    <View style={styles.grid}>
      {[...Array(totalRows)].map((_, rowIndex) => {
        const isCurrent = rowIndex === guesses.length;
        const guess = isCurrent
          ? { word: currentGuess, result: [] }
          : guesses[rowIndex] || { word: '', result: [] };

        return (
          <View key={rowIndex} style={styles.row}>
            {[...Array(5)].map((_, colIndex) => {
              const char = guess.word[colIndex] || '';
              const color = guess.result[colIndex];
              const backgroundColor =
                color === 'correct'
                  ? 'green'
                  : color === 'present'
                  ? 'orange'
                  : 'white';

              return (
                <View
                  key={colIndex}
                  style={[
                    styles.tile,
                    { backgroundColor, borderColor: '#555' },
                  ]}
                >
                  <Text style={styles.letter}>{char?.toUpperCase()}</Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: { alignItems: 'center', marginTop: 30 },
  row: { flexDirection: 'row', marginBottom: 5 },
  tile: {
    width: 50,
    height: 50,
    borderWidth: 2,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default WordleGrid;

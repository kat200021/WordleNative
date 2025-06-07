import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
];

type Props = {
  onKeyPress: (key: string) => void;
  keyStatuses: { [key: string]: string };
};


const Keyboard: React.FC<Props> = ({ onKeyPress, keyStatuses }) => {
    const getKeyStyle = (key: string) => {
        const status = keyStatuses[key.toLowerCase()];
        if (status === 'correct') return { backgroundColor: 'green' };
        if (status === 'present') return { backgroundColor: 'orange' };
        if (status === 'absent') return { backgroundColor: 'darkgrey' };
        return { backgroundColor: 'lightgrey' };
      };
  return (
    <View style={styles.container}>
      {KEYS.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((key) => (
            <TouchableOpacity
              key={key}
              style={[styles.key, getKeyStyle(key)]}
              onPress={() => onKeyPress(key)}
            >
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  key: {
    backgroundColor: '#ddd',
    padding: 12,
    margin: 2,
    borderRadius: 6,
    minWidth: 30,
    alignItems: 'center',
  },
  wideKey: {
    minWidth: 60,
  },
  keyText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Keyboard;

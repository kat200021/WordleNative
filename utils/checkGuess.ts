export const checkGuess = (guess: string, solution: string): string[] => {
    const result = Array(5).fill('absent');
    const solutionLetters = solution.split('');
    const guessLetters = guess.split('');
  
    for (let i = 0; i < 5; i++) {
      if (guessLetters[i] === solutionLetters[i]) {
        result[i] = 'correct';
        solutionLetters[i] = null!;
      }
    }
  
    for (let i = 0; i < 5; i++) {
      if (result[i] !== 'correct') {
        const index = solutionLetters.indexOf(guessLetters[i]);
        if (index !== -1) {
          result[i] = 'present';
          solutionLetters[index] = null!;
        }
      }
    }
  
    return result;
  };
  
  
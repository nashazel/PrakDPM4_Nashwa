import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const FutsalScoreApp = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const teamA = 'Tim A';
  const teamB = 'Tim B';

  const incrementScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        Alert.alert('Pemenang', `${teamA} menang!`);
      }
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        Alert.alert('Pemenang', `${teamB} menang!`);
      }
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengelola Skor Futsal</Text>
      <View style={styles.teamContainer}>
        <View style={styles.team}>
          <Text style={styles.teamName}>{teamA}</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => incrementScore('A')} />
            <Button title="-" onPress={() => decrementScore('A')} />
          </View>
        </View>
        <View style={styles.team}>
          <Text style={styles.teamName}>{teamB}</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => incrementScore('B')} />
            <Button title="-" onPress={() => decrementScore('B')} />
          </View>
        </View>
      </View>
      <Button title="Reset Pertandingan" onPress={resetScores} color="#ff6347" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  team: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

export default FutsalScoreApp;

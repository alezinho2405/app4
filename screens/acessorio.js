// screens/Alimentos.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Alimentos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Acessorios e Equipamentos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    color: '#007BFF',
  },
});

export default Alimentos;

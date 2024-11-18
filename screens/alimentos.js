// screens/Alimentos.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Alimentos = () => {
  // Estado para controlar a visibilidade da lista de alimentos e o alimento selecionado
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  // Dados dos alimentos (com informações de quantidade de água)
  const alimentos = [
    {
      name: 'Arroz',
      quantity: '5kg',
      image: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/7c44045d2e8577819cb76b2b404902dd.webp?itok=KzeGh6J4://example.com/https://www.google.com/url?sa=i&url=https%3A%2F%2Freceitas.band.uol.com.br%2Freceita%2Farroz-branco-soltinho-band-receitas-id-12009&psig=AOvVaw2nB90Yu9Ig1-LMSwdU8aRz&ust=1732049562882000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOia7dbh5okDFQAAAAAdAAAAABAh', // Substitua por uma URL válida
      water: 'Para produzir 5 kg de arroz, seriam necessários cerca de 12.500 litros de água.',
    },
    {
      name: 'Feijão',
      quantity: '500g',
      image: 'https://riopreto.gosti.com.br/wp-content/uploads/2021/08/Feijao.jpg', // Substitua por uma URL válida
      water: 'Para produzir 1 kg de manteiga, seriam necessários cerca de 18.00 litros de água.',
    },
    {
      name: 'Leite',
      quantity: '1 litro',
      image: 'https://ser.vitao.com.br/wp-content/uploads/2017/07/shutterstock_342000047-1-1-920x535.jpg', // Substitua por uma URL válida
      water: 'Para produzir 1 litro de leite, seriam necessários cerca de 712,5 litros de água.',
    },
    {
      name: 'Queijo',
      quantity: '200g',
      image: 'https://publisher.diariodocomercio.com.br/wp-content/uploads/2022/05/queijo-minas-artesanal-cultura.jpg', // Substitua por uma URL válida
      water: '1800L',
    },
    {
      name: 'Batata',
      quantity: '1kg',
      image: 'https://example.com/batata.jpg', // Substitua por uma URL válida
      water: '500L',
    },
    {
      name: 'Frango',
      quantity: '1kg',
      image: 'https://example.com/frango.jpg', // Substitua por uma URL válida
      water: '3900L',
    },
    {
      name: 'Manteiga',
      quantity: '200g',
      image: 'https://example.com/manteiga.jpg', // Substitua por uma URL válida
      water: '5000L',
    },
    {
      name: 'Carne',
      quantity: '1kg',
      image: 'https://example.com/carne.jpg', // Substitua por uma URL válida
      water: '15500L',
    },
  ];

  // Função para exibir as opções do alimento
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  // Função para exibir as informações do alimento selecionado
  const handleSelectAlimento = (food) => {
    setSelectedFood(food);
    setShowOptions(false);  // Oculta a lista de opções após selecionar um alimento
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual alimento deseja ver?</Text>

      {/* Card com texto e seta ao lado */}
      <TouchableOpacity style={styles.card} onPress={toggleOptions}>
        <Text style={styles.cardText}>Selecione um alimento</Text>
        <Text style={styles.arrow}>↓</Text> {/* Seta ao lado */}
      </TouchableOpacity>

      {/* Lista de alimentos aparece apenas se 'showOptions' for true */}
      {showOptions && (
        <View style={styles.optionsList}>
          {alimentos.map((food) => (
            <TouchableOpacity
              key={food.name}
              style={styles.optionCard}
              onPress={() => handleSelectAlimento(food)}
            >
              <Text style={styles.option}>{food.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Exibe os detalhes do alimento selecionado */}
      {selectedFood && (
        <View style={styles.detailsContainer}>
          <Text style={styles.foodName}>{selectedFood.name}</Text>
          <Text style={styles.foodQuantity}>Quantidade: {selectedFood.quantity}</Text>

          {/* Exibindo a imagem do alimento */}
          <Image source={{ uri: selectedFood.image }} style={styles.foodImage} />

          {/* Quantidade de água */}
          <Text style={styles.foodWater}>Água necessária: {selectedFood.water}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#007BFF',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
    width: '80%',
    flexDirection: 'row', // Alinha texto e seta horizontalmente
    justifyContent: 'space-between', // Espaço entre texto e seta
    alignItems: 'center', // Alinha verticalmente
  },
  cardText: {
    fontSize: 16,
    color: '#007BFF',
  },
  arrow: {
    fontSize: 20,
    color: '#007BFF',
  },
  optionsList: {
    marginTop: 20,
    width: '80%',
  },
  optionCard: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    fontSize: 16,
    color: '#007BFF',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  foodName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  foodQuantity: {
    fontSize: 18,
    color: '#007BFF',
    marginBottom: 10,
  },
  foodImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  foodWater: {
    fontSize: 16,
    color: '#007BFF',
    textAlign: 'center',
  },
});

export default Alimentos;

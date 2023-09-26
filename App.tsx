import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {globalStyles} from './src/core/config/global-styles';
import colors from './src/core/config/colors';
import AppBtn from './src/components/AppBtn';

const data = [
  {
    id: '1',
    image: require('./src/assets/images/riro.png'),
    foodName: 'Africa Dounut Mix (Puf Puff)',
    price: '£30',
  },
  {
    id: '2',
    image: require('./src/assets/images/riro.png'),
    foodName: 'Efo Riro',
    price: '£90',
  },
  {
    id: '3',
    image: require('./src/assets/images/porridge.png'),
    foodName: 'Asaro (Yam and Egg)',
    price: '£300',
  },
  {
    id: '4',
    image: require('./src/assets/images/stew.png'),
    foodName: 'Chicken Stew',
    price: '£130',
  },
  {
    id: '5',
    image: require('./src/assets/images/porridge.png'),
    foodName: 'Asaro (Yam and Egg)',
    price: '£310',
  },
  {
    id: '6',
    image: require('./src/assets/images/porridge.png'),
    foodName: 'Asaro (Yam and Egg)',
    price: '£10',
  },
];

interface CardProps {
  foodName: string;
  price: string;
  image: any;
}

const Card: React.FC<CardProps> = ({foodName, price, image}) => {
  const formattedFoodName =
    foodName.length > 10 ? foodName.slice(0, 10) + '...' : foodName;

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={require('./src/assets/images/love.png')} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.foodName}>{formattedFoodName}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppBtn title="Add to cart" icon onPress={() => console.log('Hello')} />
      </View>
    </View>
  );
};

const numColumns = 2;

const renderItem = ({item}: {item: (typeof data)[0]}) => (
  <Card foodName={item.foodName} price={item.price} image={item.image} />
);

const keyExtractor = (item: (typeof data)[0]) => item.id;

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={numColumns}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginHorizontal: 12,
    marginBottom: 15,
    padding: 10,
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  imageContainer: {
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  foodName: {
    ...globalStyles.paragraph,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  price: {
    ...globalStyles.paragraph,
    color: colors.primary,
    fontFamily: 'Poppins-Medium',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;

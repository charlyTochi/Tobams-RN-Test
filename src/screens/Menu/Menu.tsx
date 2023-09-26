import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../../core/config/colors';
import {globalStyles} from '../../core/config/global-styles';
import AppBtn from '../../components/AppBtn';
import Icon from 'react-native-vector-icons/Ionicons';
import routes from '../../routes/routes';

const data = [
  {
    id: '1',
    image: require('../../assets/images/doughnut.png'),
    foodName: 'Africa Dounut Mix (Puf Puff)',
    price: '£30',
  },
  {
    id: '2',
    image: require('../../assets/images/riro.png'),
    foodName: 'Efo Riro',
    price: '£90',
  },
  {
    id: '3',
    image: require('../../assets/images/porridge.png'),
    foodName: 'Asaro (Yam and Egg)',
    price: '£300',
  },
  {
    id: '4',
    image: require('../../assets/images/stew.png'),
    foodName: 'Chicken Stew',
    price: '£130',
  },
  {
    id: '5',
    image: require('../../assets/images/porridge.png'),
    foodName: 'Asaro (Yam and Egg)',
    price: '£310',
  },
  {
    id: '6',
    image: require('../../assets/images/porridge.png'),
    foodName: 'Asaro (Yam and Egg)',
    price: '£10',
  },
];

interface CardProps {
  foodName: string;
  price: string;
  image: any;
}

const numColumns = 2;

export const Menu = props => {
  const {navigation} = props;
  const [searchValue, setSearchValue] = useState('');

  const renderItem = ({item}: {item: (typeof data)[0]}) => (
    <Card foodName={item.foodName} price={item.price} image={item.image} />
  );

  const keyExtractor = (item: (typeof data)[0]) => item.id;

  // eslint-disable-next-line react/no-unstable-nested-components
  const Card = ({foodName, price, image}) => {
    const formattedFoodName =
      foodName.length > 10 ? foodName.slice(0, 10) + '...' : foodName;

    return (
      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate(routes.viewItem, {
            foodName: foodName,
            price: price,
            image,
          })
        }>
        <View style={styles.iconContainer}>
          <Image source={require('../../assets/images/love.png')} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={image} style={{width: 95, height: 95}} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.foodName}>{formattedFoodName}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppBtn
            title="Add to cart"
            icon={'shopping-bag'}
            onPress={() =>
              navigation.navigate(routes.cart, {
                foodName: foodName,
                price: price,
              })
            }
            type={undefined}
            color={undefined}
            moreButtonStyles={undefined}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <View style={styles.parentContainer}>
        <Text style={styles.menuTxt}>Menu</Text>
        <View style={styles.separator} />

        <View style={styles.searchMainView}>
          <Icon
            name="search"
            size={20}
            color={colors.black}
            style={{marginLeft: 80}}
          />
          <TextInput
            onChangeText={value => setSearchValue(value)}
            value={searchValue}
            placeholder="Search"
            placeholderTextColor={colors.black}
            style={styles.textInputStyle}
          />
        </View>

        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={numColumns}
            columnWrapperStyle={styles.row}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    paddingLeft: 10,
    paddingRight: 10,
    width: 200,
    textAlignVertical: 'center',
    paddingTop: 0,
    paddingBottom: 0,
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
  separator: {
    borderWidth: 0.6,
    borderColor: colors.ash,
  },
  menuTxt: {
    ...globalStyles.heading5,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  parentContainer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: colors.grey,
  },
  textInputStyle: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    marginTop: 5,
  },

  searchMainView: {
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: 15,
    borderColor: colors.ash,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});

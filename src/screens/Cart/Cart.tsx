import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {globalStyles} from '../../core/config/global-styles';
import colors from '../../core/config/colors';
import AppBtn from '../../components/AppBtn';
import routes from '../../routes/routes';

const dummyCartItems = [
  {
    id: 1,
    name: 'Asaro',
    optional: ' (Yam Porridge)',
    price: '£30',
    image: require('../../assets/images/porridge.png'),
  },
  {
    id: 2,
    name: 'Moi Moi',
    optional: '(Bean Cake)',
    price: '£30',
    image: require('../../assets/images/bean-cake.png'),
  },
  {
    id: 3,
    name: 'Efo Riro',
    optional: '',
    price: '£30',
    image: require('../../assets/images/riro.png'),
  },
];

const ProductItem: React.FC<{item: any}> = ({item}) => (
  <View style={styles.productItem}>
    <Image source={item.image} style={styles.basket} />
    <View style={styles.productInfo}>
      <View style={styles.itemView}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.subName}> {item.optional}</Text>
      </View>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Image
        source={require('../../assets/images/basket.png')}
        style={styles.basketIcon}
      />
    </View>
    <View style={styles.quantityContainer}>
      <View style={styles.quantityButton}>
        <Image
          source={require('../../assets/images/black-minus.png')}
          style={styles.quantityButtonImage}
        />
      </View>
      <Text style={styles.quantity}>1</Text>
      <View style={styles.quantityButton}>
        <Image
          source={require('../../assets/images/cart-black.png')}
          style={styles.plusButtonImage}
        />
      </View>
    </View>
  </View>
);

export const Cart: React.FC = props => {
  const {navigation} = props;

  // eslint-disable-next-line react/no-unstable-nested-components
  const Header = () => {
    return (
      <>
        <Pressable
          onPress={() => navigation.navigate(routes.home)}
          style={styles.header}>
          <View style={styles.arrowContainer}>
            <Image
              source={require('../../assets/images/right-arrow.png')}
              style={styles.arrowImage}
            />
          </View>
          <Text style={styles.headerText}>Cart</Text>
        </Pressable>
      </>
    );
  };

  return (
    <>
      <Header />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.separator} />
        {dummyCartItems.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <View style={styles.summaryContainer}>
          <View style={styles.totalValueContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.items}>(3 items)</Text>
          </View>
          <Text style={styles.amount}>£90</Text>
        </View>
        <AppBtn
          title="Checkout - £90"
          onPress={() => console.log('hello')}
          moreButtonStyles={{width: 350}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: colors.grey,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: colors.grey,
    height: 80,
  },
  arrowContainer: {
    width: 36,
    height: 36,
    backgroundColor: colors.white,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.ash,
    top: 30,
  },
  arrowImage: {
    width: 6.5,
    height: 10,
    marginTop: 12,
  },
  headerText: {
    ...globalStyles.heading5,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
    paddingHorizontal: 120,
    top: 35,
  },
  separator: {
    borderWidth: 0.6,
    borderColor: colors.ash,
  },
  productItem: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    ...globalStyles.paragraph,
    color: colors.black,
    fontFamily: 'Poppins-Medium',
  },
  productPrice: {
    ...globalStyles.paragraph,
    fontFamily: 'Poppins-Medium',
    marginTop: 5,
    color: colors.primary,
  },
  basketIcon: {
    width: 16,
    height: 19,
    marginTop: 10,
  },
  quantityContainer: {
    flex: 0.3,
  },
  quantityButton: {
    height: 32,
    width: 32,
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: 8,
  },
  quantityButtonImage: {
    width: 10,
    height: 2,
    marginVertical: 15,
  },
  plusButtonImage: {
    width: 10,
    height: 10,
    marginVertical: 10,
  },
  quantity: {
    ...globalStyles.paragraph,
    marginTop: 5,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
    marginHorizontal: 14,
  },
  totalContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  subName: {
    ...globalStyles.paragraph,
    fontFamily: 'Poppins-Regular',
    color: colors.darkAsh,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalValueContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  totalText: {
    ...globalStyles.paragraph,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  items: {
    marginLeft: 10,
    ...globalStyles.paragraph,
    fontFamily: 'Poppins-Medium',
    color: colors.darkAsh,
  },
  amount: {
    ...globalStyles.paragraph,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  basket: {
    width: 92,
    height: 92,
  },
  itemView: {
    flexDirection: 'row',
  },
});

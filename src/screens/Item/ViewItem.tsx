import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {globalStyles} from '../../core/config/global-styles';
import colors from '../../core/config/colors';
import AppBtn from '../../components/AppBtn';
import Accordion from '../../components/Accordion';

const Header = () => {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.iconContainer}>
        <Image
          source={require('./src/assets/images/right-arrow.png')}
          style={headerStyles.icon}
        />
      </View>
    </View>
  );
};

const ProductInfo = () => {
  return (
    <View style={productInfoStyles.container}>
      <Image source={require('./src/assets/images/circles.png')} />
    </View>
  );
};

const ProductTitle = () => {
  return (
    <View style={productTitleStyles.container}>
      <Text style={productTitleStyles.title}>
        African Donut Mix (Puff Puff)
      </Text>
      <Text style={productTitleStyles.price}>$3.39</Text>
    </View>
  );
};

const ProductDescription = () => {
  return (
    <Text style={productDescriptionStyles.container}>
      Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made
      from yeast dough, shaped into balls and deep-fried until golden brown. It
      has a doughnut-like texture but slightly.
    </Text>
  );
};

const CartControls = () => {
  return (
    <View style={cartControlsStyles.container}>
      <View style={cartControlsStyles.controlContainer}>
        <Image
          source={require('./src/assets/images/minus.png')}
          style={cartControlsStyles.controlIcon}
        />
      </View>
      <Text style={cartControlsStyles.quantity}>1</Text>
      <View style={cartControlsStyles.controlContainer}>
        <Image
          source={require('./src/assets/images/plus.png')}
          style={cartControlsStyles.plusIcon}
        />
      </View>
    </View>
  );
};

export const ViewItems: React.FC = () => {
  const accordionData = [
    {
      title: 'Ingredients',
      content: 'Content for Section 1',
    },
    {
      title: 'Nutritional Information',
      content: 'Content for Section 2',
    },
    {
      title: 'How to prepare',
      content: 'Content for Section 3',
    },
    {
      title: 'Dietary Information',
      content: 'Content for Section 3',
    },
    {
      title: 'Storage Information',
      content: 'Content for Section 3',
    },
    {
      title: 'Extra',
      content: 'Content for Section 3',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={scrollStyles.container}>
        <ProductInfo />
        <ProductTitle />
        <ProductDescription />
        <View style={accordionStyles.container}>
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
          <View style={accordionStyles.separator} />
        </View>
        <CartControls />
        <View style={buttonStyles.container}>
          <AppBtn title="Add to cart" onPress={() => console.log('Hello')} />
        </View>
        <View style={buttonStyles.subscribecontainer}>
          <AppBtn
            title="Subscribe to a Plan"
            type={'outline'}
            color={colors.primary}
            onPress={() => console.log('Hello')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
  },
});

const headerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 20,
  },
  iconContainer: {
    width: 36,
    height: 36,
    backgroundColor: colors.white,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.ash,
  },
  icon: {
    width: 6.5,
    height: 10,
    marginTop: 12,
  },
});

const scrollStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 18,
    paddingTop: 20,
  },
});

const productInfoStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 40,
    borderRadius: 90,
  },
});

const productTitleStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...globalStyles.heading4,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  price: {
    ...globalStyles.heading4,
    fontFamily: 'Poppins-Medium',
    color: colors.primary,
  },
});

const productDescriptionStyles = StyleSheet.create({
  container: {
    ...globalStyles.paragraph,
    color: '#4A4A4A',
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
  },
});

const accordionStyles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  separator: {
    borderWidth: 0.8,
    borderColor: colors.ash,
  },
});

const cartControlsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
  },
  controlContainer: {
    width: 48,
    height: 48,
    backgroundColor: colors.white,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.ash,
  },
  controlIcon: {
    width: 15,
    marginTop: 20,
  },
  plusIcon: {
    width: 15,
    marginTop: 15,
    height: 15,
  },
  quantity: {
    ...globalStyles.heading3,
    marginTop: 5,
    color: colors.black,
  },
});

const buttonStyles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 40,
  },
  subscribecontainer: {
    marginTop: 20,
    marginBottom: 30,
  },
});

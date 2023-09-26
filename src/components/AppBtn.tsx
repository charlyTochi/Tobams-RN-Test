import React from 'react';
import {StyleSheet, Text, Pressable, Keyboard, View, Image} from 'react-native';
import colors from '../core/config/colors';
import {globalStyles} from '../core/config/global-styles';

const AppBtn = ({
  onPress,
  title,
  isDisabled,
  type,
  color,
  icon,
  moreButtonStyles,
  borderColor,
  textColor = colors.white,
}) => {
  const handlePress = () => {
    Keyboard.dismiss();
    onPress();
  };

  const buttonStyles = [
    moreButtonStyles,
    {
      ...styles.appButtonContainer,
      opacity: isDisabled ? 0.5 : 1,
      backgroundColor:
        type === 'outline' ? color || colors.primary : colors.primary,
      borderColor: borderColor || colors.primary,
    },
  ];

  return (
    <Pressable
      onPress={handlePress}
      accessible={true}
      accessibilityLabel="AppButton"
      style={buttonStyles}
      disabled={isDisabled}>
      <View style={styles.buttonContent}>
        {icon && (
          <Image
            source={require('../assets/images/cart.png')}
            style={styles.icon}
          />
        )}
        <Text
          style={[
            globalStyles.paragraph,
            styles.buttonText,
            {color: textColor},
          ]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 50,
    paddingHorizontal: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    marginTop: 1,
  },
});

export default AppBtn;

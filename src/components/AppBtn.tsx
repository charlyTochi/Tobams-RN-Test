import React from 'react';
import {StyleSheet, Text, Pressable, Keyboard, View} from 'react-native';
import colors from '../core/config/colors';
import {globalStyles} from '../core/config/global-styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AppBtn = (props: {
  onPress: any;
  icon: any;
  title: any;
  type: any;
  color: any;
  textColor?: string | undefined;
  moreButtonStyles: any;
}) => {
  const {
    onPress,
    title,
    moreButtonStyles,
    type,
    icon,
    color,
    textColor = colors.white,
  } = props;

  const containerStyle = [
    moreButtonStyles,
    styles.appButtonContainer,
    type === 'outline' && {
      ...styles.btnOutline,
      borderColor: color || colors.primary,
    },
    {
      opacity: 1,
      backgroundColor: type !== 'outline' ? color || colors.primary : undefined,
    },
  ];

  const textStyle = {
    ...globalStyles.paragraph,
    fontFamily: 'Poppins-Medium',
    color: type === 'outline' ? color : textColor,
  };

  const handlePress = () => {
    Keyboard.dismiss();
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      accessible={true}
      accessibilityLabel="AppButton"
      style={containerStyle}>
      <View style={{flexDirection: 'row'}}>
        {icon && (
          <FontAwesome
            name={icon}
            size={20}
            color={colors.white}
            style={{marginRight: 10}}
          />
        )}

        <Text style={textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 50,
    paddingHorizontal: 20,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnOutline: {
    borderWidth: 1.5,
  },
});

export default AppBtn;

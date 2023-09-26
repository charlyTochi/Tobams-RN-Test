import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';
import colors from '../core/config/colors';
import {globalStyles} from '../core/config/global-styles';
import Icon from 'react-native-vector-icons/FontAwesome';
interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({title, content}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const rotateValue = new Animated.Value(0);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);

    Animated.timing(rotateValue, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const rotateArrow = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Animated.View style={{transform: [{rotate: rotateArrow}]}}>
            {isExpanded ? (
              <Icon
                name="angle-up"
                size={20}
                color={colors.black}
                style={{marginLeft: 80}}
              />
            ) : (
              <Icon
                name="angle-down"
                size={20}
                color={colors.black}
                style={{marginLeft: 80}}
              />
            )}
          </Animated.View>
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.content}>
          <Text style={styles.contentTxt}>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.ash,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
  },
  title: {
    ...globalStyles.paragraph,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  content: {
    padding: 10,
  },
  contentTxt: {
    ...globalStyles.small,
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
});

export default Accordion;

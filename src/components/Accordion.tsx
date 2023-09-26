import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';

const Accordion: React.FC<{title: string; content: string}> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const rotateArrow = new Animated.Value(0);
  const arrowRotation = Animated.interpolate(rotateArrow, {
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    Animated.timing(rotateArrow, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Animated.View style={{transform: [{rotate: arrowRotation}]}}>
          <Text>Hi</Text>
        </Animated.View>
      </TouchableOpacity>
      {isOpen && <Text style={styles.content}>{content}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
  },
  content: {
    padding: 10,
  },
});

export default Accordion;

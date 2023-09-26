import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import colors from '../../core/config/colors';
import {globalStyles} from '../../core/config/global-styles';
import {Menu} from '../Menu/Menu';
import {Cart} from '../Cart/Cart';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          safeAreaInsets: {
            bottom: 20,
          },
          style: {height: 80, borderTopColor: 'transparent'},
          labelStyle: {
            ...globalStyles.small,
            marginBottom: 10,
            marginTop: 0,
          },
          activeTintColor: colors.primary,
          iconStyle: {
            marginTop: 10,
          },
          allowFontScaling: true,
        }}
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Menu}
          options={{
            tabBarIcon: ({color, focused}) => (
              <View>
                <MaterialIcons
                  name="home"
                  color={focused ? colors.primary : colors.ash}
                  size={25}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({color, focused}) => (
              <FontAwesome
                name="th-large"
                color={focused ? colors.primary : colors.ash}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({color, focused}) => (
              <FontAwesome
                name="shopping-bag"
                color={focused ? colors.primary : colors.ash}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Menu}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Image
                source={require('../../assets/images/profile-image.png')}
                style={{width: 30, height: 30}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default Home;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import appRouter from '../routes/router/app-router';

const Stack = createStackNavigator();

export const Main = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {appRouter.map((view, index) => (
            <Stack.Screen
              key={index}
              name={view.route}
              component={view.component}
              options={{headerShown: false}}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

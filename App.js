/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './src/Drawer/DrawerContent';

// Screens
import Auth from './src/screens/Auth';
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Community from './src/screens/Community';
import NewCommunity from './src/screens/NewCommunity';

// Drawer Screens
import Settings from './src/Drawer/Settings';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="Auth"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Beta Chat',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerShown: false,
          swipeEnabled: false,
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTintColor: '#fff',
            headerShown: false,
            headerStyle: {
              backgroundColor: '#2196F3',
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#2196F3',
            },
          }}
        />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen
          name="NewCommunity"
          component={NewCommunity}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Auth"
//           component={Auth}
//           options={{
//             title: '',
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             title: 'Home',
//             headerBackTitleVisible: false,
//             headerShown: false,
//             headerBackButtonMenuEnabled: false,
//           }}
//         />
//         <Stack.Screen
//           name="Register"
//           component={Register}
//           options={{
//             headerTintColor: '#fff',
//             headerShown: false,
//             headerStyle: {
//               backgroundColor: '#2196F3',
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{
//             headerTintColor: '#fff',
//             headerStyle: {
//               backgroundColor: '#2196F3',
//             },
//           }}
//         />
//         <Stack.Screen name="Community" component={Community} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default App;

import React from "react"
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import {
    createDrawerNavigator,
    DrawerActions,
    createAppContainer
} from 'react-navigation'

import createStackNavigator from 'react-navigation-stack'

const Scree1_Nav = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    First: {
        screen: Screen1,
        navigationOptions: ({
            navigation
        }) => ({
            title: 'Demo Screen 1',
            headerLeft: < NavigationDrawerStructure navigationProps = {
                navigation
            }
            />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    }
});
const Scree2_Nav = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
        screen: Screen2,
        navigationOptions: ({
            navigation
        }) => ({
            title: 'Demo Screen 2',
            headerLeft: < NavigationDrawerStructure navigationProps = {
                navigation
            }
            />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    }
});
const Scree3_Nav = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Third: {
        screen: Screen3,
        navigationOptions: ({
            navigation
        }) => ({
            title: 'Demo Screen 3',
            headerLeft: < NavigationDrawerStructure navigationProps = {
                navigation
            }
            />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    }
});

const NavigationDrawerStructure = (props)=> {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };

      return (
        <View style={{ flexDirection: 'row' }}>
          {/* <TouchableOpacity onPress={toggleDrawer.bind(this)}> */}
            {/*Donute Button Image */}
            <Button transparent onPress={null}>
              <Icon name='menu'></Icon>
            </Button>
          {/* </TouchableOpacity> */}
        </View>
      );
  }

const Menu = createDrawerNavigator({
    Screen1: {
        //Title
        screen: Scree1_Nav,
        navigationOptions: {
            drawerLabel: 'Demo Screen 1',
        },
    },

    Screen2: {
        //Title
        screen: Scree2_Nav,
        navigationOptions: {
            drawerLabel: 'Demo Screen 2',
        },
    },

    Screen3: {
        //Title
        screen: Scree3_Nav,
        navigationOptions: {
            drawerLabel: 'Demo Screen 3',
        },
    }
});

export default Menu;
import React from 'react'
import {Button, Icon} from 'native-base';

import { TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from 'react-navigation-drawer';

const Menu = (props)=>{

    const toggleMenu = ()=>{
        props.navigation.dispatch(DrawerActions.openDrawer());
    }

    return (
        <TouchableOpacity 
             onPress={toggleMenu}>
                <Icon name='menu'></Icon>
        </TouchableOpacity> 
    );
}

export default withNavigation(Menu);
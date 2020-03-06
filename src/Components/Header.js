import React, { Component } from "react";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import Menu from '../Components/Menu'
const HeaderComp = (props) => {
  toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

    return ( 
      <>
        <Header>
          <Left>
            <Menu />
          </Left>
          <Body>
            <Title>Theme Studio</Title>
          </Body>
        </Header>
        
      </>
      );
}

export default HeaderComp;


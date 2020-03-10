import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {View} from 'react-native' 
const CardImageExample = (props)=>{
    const navTo = ()=>{
      console.log(props);
      props.navigation.navigate('Detail', {
        data: props.data
      });
    }

    return (

            <Card>
              <CardItem button onPress={navTo}>
                <Left>
                  {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                  <Body>
                    <Text>{props.title}</Text>
                    <Text >{props.desc}</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
      );
}

export default CardImageExample;
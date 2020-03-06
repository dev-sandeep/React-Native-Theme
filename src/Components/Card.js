import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {View} from 'react-native' 
const CardImageExample = (props)=>{
    // if(!props.data || props.data == undefined)
    //     return (<Container></Container>);
    console.log(props.data, '----');
    return (

            <Card>
              <CardItem>
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
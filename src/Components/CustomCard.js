import React, { Component } from "react";
import {View} from 'react-native'
import { Card, CardItem, Body, Text  } from 'native-base';
const CustomCard = (props = '') => {
    return ( 
        <View>
        <Card>
            <CardItem>
              <Body>
                <Text>
                   {props.text}
                </Text>
              </Body>
            </CardItem>
          </Card>
      </View>);
}

export default CustomCard;

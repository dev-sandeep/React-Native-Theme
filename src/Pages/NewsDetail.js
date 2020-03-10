import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {View} from 'react-native' 
import Header from './../Components/Header'
const NewsDetail = (props)=>{

    let data = props.navigation.getParam('data');

    return (
            <>
            <Header />
            <Content>
                <Card>
                    <CardItem>
                    <Left>
                        <Body>
                        <Text>{data.title}</Text>
                        <Text note>{data.source.name}</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: data.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Text>{data.content}</Text>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent onPress={()=>{props.navigation.navigate('http://google.com')}}>
                            {/* <Icon active name="thumbs-up" /> */}
                            <Text>READ MORE</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
                </Content>
            </>
      );
}

export default NewsDetail;
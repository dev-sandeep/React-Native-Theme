import React, { Component } from "react";
import Header from './../Header'
import {StyleSheet} from 'react-native'
import { Container, Content, Card, CardItem, Text, Body } from "native-base";

export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content style={styles.m3}>
          <Card>
            <CardItem header bordered>
              <Text>Card Header</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Card Footer</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    m3: {
        padding: 3
    }
});
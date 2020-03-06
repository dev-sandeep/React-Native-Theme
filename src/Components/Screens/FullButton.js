import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import Header from './../Header'
import {StyleSheet} from 'react-native'

export default class FullButton extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content style={styles.m3}>
          <Button full light>
            <Text>We</Text>
          </Button>
          <Button full>
            <Text>All</Text>
          </Button>
          <Button full success>
            <Text>Will</Text>
          </Button>
          <Button full info>
            <Text>Fight</Text>
          </Button>
          <Button full warning>
            <Text>Together</Text>
          </Button>
          <Button full danger>
            <Text>Against</Text>
          </Button>
          <Button full dark>
            <Text>Dark</Text>
          </Button>
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
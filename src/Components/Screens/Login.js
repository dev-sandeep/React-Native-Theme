import React, { Component } from "react";
import {View, Text} from 'react-native'
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import Header from './../Header'
const Login = () => {
    return ( 
        <Container>
        <Header />
        <Content>
            <Form>
                <Item fixedLabel>
                <Label>Username</Label>
                <Input />
                </Item>
                <Item fixedLabel last>
                <Label>Password</Label>
                <Input />
                </Item>
            </Form>
        </Content>
      </Container>);
}

export default Login;

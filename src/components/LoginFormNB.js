import React, { Component } from 'react';
import { Item } from 'react-native';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';

export default class LoginFormNB extends Component {
    render() {
        return (
            <Container>
                <Content>

                    <Item>
                        <Icon active name='home' />
                        <Input placeholder='Icon Textbox'/>
                    </Item>

                    <Item>
                        <Input placeholder='Icon Alignment in Textbox'/>
                        <Icon active name='swap' />
                    </Item>
                </Content>
            </Container>
        );
    }
}

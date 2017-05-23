import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Right, Button, Icon, Body, Title } from 'native-base';

export default class HeaderNB extends Component {

// state = { headerText: '' }
// constructor(props) {
//   super(props)
//
// }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        {/* <Title>{props.headerText}</Title> */}
                        <Title></Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}

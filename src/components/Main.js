import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'

class Main extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    state = {
      token: null
    }
  }

  componentDidMount(){
    this.setState = {
      token: this.props.data
    }
    console.log('GOING INTO MAIN')
    console.log(this.props.data);
  }

  onButtonPress() {
    console.log('ON BUTTON PRESS PROPS' + this.props.data);
    Actions.MessageSet(this.props.data);
  }

  render(){
    return(
      <Container>
        <Header></Header>
        <Content padder >
          <Button block onPress={ this.onButtonPress.bind(this) } >
            <Text>Main Page</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Main;

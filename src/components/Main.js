import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Icon, Header, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Main extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    state = {
      token: null
    };
  }

  componentDidMount() {
    this.setState = {
      token: this.props.data
    };
    console.log('GOING INTO MAIN');
    console.log(this.props.data);
  }

  onButtonPress() {
    console.log('ON BUTTON PRESS PROPS' + this.props.data);
    Actions.MessageSet(this.props.data);
  }

  render() {
    return(
      <Container>
        <Header></Header>
            <Content padder >
              <Button block onPress={this.onButtonPress.bind(this)} >
                <Text>Send a Request</Text>
              </Button>

              <Card>
             <CardItem>
                 <Thumbnail source={require('../assets/Jason.png')} />
                 {/* <Text>{this.state.name}</Text> */}
                 <Text note> Jason</Text>
             </CardItem>

             <CardItem>
                 <Image style={{ resizeMode: 'cover', paddingRight: 5 }} source={require('../assets/receiptThumb.png')} />
             </CardItem>

             <CardItem>
                 <Icon name={'ios-musical-notes'} style={{color : '#ED4A6A'}} />
                 <Text>Pay Now</Text>
                 <Text style={{ alignItems: 'flex-end' }}>Reject Request</Text>
             </CardItem>
           </Card>

        </Content>
      </Container>
    );
  }
}

export default Main;

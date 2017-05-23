import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Icon, Header, Button, Text, Left, Right, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../assets/StyleGuide';

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

  onPayNowPress() {
    console.log('ON BUTTON PRESS PROPS' + this.props.data);
    Actions.creditSet();
  }

  onRejectPress() {

  }

  render() {
    return(
      <Container>
        <Header>
        </Header>
        <View style={{ marginLeft: 15, marginRight: 15}}>

          <Card style={{ flex: 0 }}>
             <CardItem style={{}}>
               <Left>
                 <Thumbnail source={require('../assets/Jason.png')} />
                 <Body>
                   {/* <Text>{this.state.name}</Text> */}
                   <Text>Jason</Text>
                   <Text note>$117.05</Text>
                 </Body>
               </Left>
             </CardItem>

             <CardItem>
               <Body style={{ alignItems: 'center', justifyContent:'center', width: styles.screenWidth}}>
                 <Image source={require('../assets/receiptThumb.png')} />
               </Body>
             </CardItem>

             <CardItem>
               <Left>
                 <Button transparent style={{ marginLeft: 20 }} onPress={ this.onPayNowPress.bind(this) } >
                    <Icon active name='md-card' style={{color : '#ED4A6A', padding: 15}} />
                    <Text>Pay Now</Text>
                 </Button>
               </Left>
               <Right>
                 <Button transparent style={{ marginRight: 20 }} onPress={ this.onRejectPress.bind(this) }>
                   <Icon active name='md-close' style={{color : '#ED4A6A',  padding: 15}} />
                   <Text>Reject</Text>
                 </Button>
               </Right>
             </CardItem>
           </Card>

           <Button block style={{marginTop: 60}} onPress={this.onButtonPress.bind(this)} >
             <Text>Send a Request</Text>
           </Button>
        </View>
      </Container>
    );
  }
}

export default Main;

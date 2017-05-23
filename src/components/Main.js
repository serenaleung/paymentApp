import React from 'react';
import { Container, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'

const Main = () => {
  
    console.log('GOING INTO MAIN PAGE')
    console.log(this.props.token)

  return(
    <Container>
      <Button block onPress={ Actions.Message() } >
        <Text>Main Page</Text>
      </Button>
    </Container>
  );
}

export { Main };

import { Dimensions } from 'react-native';

const {screenHeight: screenHeight, screenWidth: screenWidth} = Dimensions.get('window');

export default {

  container: {
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
  },
  logoContainer:{
    flex: 4/5,
    paddingRight: 120,
    paddingTop: 50,
    alignItems: 'center',
  },
  btn:{
    backgroundColor: '#FFF',
    marginLeft: 65,
    marginRight: 40,
    marginTop: 50,
    paddingLeft: 90,
    paddingRight: 80,
  },
  btnText: {
    color: '#2E2E83',
    fontSize: 14,
    width: 50,
  },
  input: {
    height: 60,
    fontSize: 16,
    color: '#FFF',
    placeholder: '#FFF',
  },
  item: {
    color: '#FFF',
  },
  iconMsg: {
    color: '#FFF',
    fontSize: 26,
  },
  icon: {
    color: '#FFF',
    fontSize: 35,
  },
  form: {

  },
}

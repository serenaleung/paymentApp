import { Dimensions } from 'react-native';

const {screenHeight: screenHeight, screenWidth: screenWidth} = Dimensions.get('window');

export default {

  container: {
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    size: 14,
    fontWeight: 'bold',
  },
  logoContainer:{
    flex: 4/5,
    paddingRight: 120,
    paddingTop: 50,
    alignItems: 'center',
  },
  btn: {
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
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 60,
    fontSize: 16,
    color: '#FFF',
  },
  inputColorPlaceholder: {
    color: '#FFF',
  },
  item: {
    color: '#FFF',
  },
  iconMsg: {
    color: '#FFF',
    fontSize: 26,
    paddingBottom: 10
  },
  icon: {
    color: '#FFF',
    fontSize: 35,
  },
  form: {

  },
  navbar:{
    backgroundColor: '#3E4EB8',
  },
  fullWidth:{
    width: screenWidth,
  },
  cardSection: {
    marginTop: 20,
    flex: 0 ,
  },
  mainIcon: {
    color : '#ED4A6A', padding: 15,
  },
  cardItemImg: {
    alignItems: 'center', justifyContent:'center', width: screenWidth,
  },
  cardMarginTop: {
    marginBottom: 35
  }
}

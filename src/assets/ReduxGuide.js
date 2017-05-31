import { Dimensions } from 'react-native';
const {screenHeight: screenHeight, screenWidth: screenWidth} = Dimensions.get('window');

export default {
  background: {
    flex: 1,
    backgroudColor: 'transparent',
    width: screenWidth,
    height: screenHeight
  },
  container: {
    flex: 1,
  },
  setContainer: {
    flex: 1,
    width: screenWidth,
  },
  logoContainer: {
    flex: 1,
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1
  },
  logo: {
    height: 200,
    width: 200
  },
  form: {
    padding: 30,
    paddingRight: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    marginBottom: 15,
    borderRadius: 5,
    color: '#FFF'
  },
  item2: {
    marginBottom: 45,
    borderRadius: 5,
    color: '#FFF'
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#fff'
  },
  btn: {
    backgroundColor: '#FFF',
    marginLeft: 43,
    marginRight: 40,
    marginBottom: 50
  },
  whiteText:{
    color: '#FFF',
    fontSize: 14
  },
  icon: {
    color: '#fff',
    fontSize: 36,
    paddingBottom: 10
  },
  iconMsg: {
    fontsize: 18
  },
  inputIcon: {
    marginLeft: 10,
    marginRight: 10,
  },

  error: {
    color: 'red',
    fontSize: 16
  },
  ccContainer: {
    backgroundColor: '#F5F5F5',
    marginTop: 60
  },
  ccLabel: {
    color: 'black',
    fontSize: 12
  },
  ccInput: {
    fontSize: 14,
    color: 'black'
  },
  btnCard: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
  },
  width: {
    width: screenWidth
  }

}

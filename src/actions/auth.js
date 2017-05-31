import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT
} from './types';

const DOMAIN = 'http://192.168.1.178:3000';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return(dispatch) => {
    dispatch({ type: LOGIN })

    fetch(`${DOMAIN}/api/v1/sessions`, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      loginSuccess( dispatch, response.success )
    })
    .catch( (e) => {
      loginFail( dispatch, e.message );
    })
  }
}

const loginSuccess = ( dispatch, data ) => {
  dispatch({ type: LOGIN_SUCCESS, payload: data })
  Actions.AfterAuth();
}

const loginFail = ( dispatch, error ) => {
  dispatch({ type: LOGIN_FAILED, payload: error })
}

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
    Actions.root();
  };
};

export const persistLogIn = (token) => {
  return(dispatch) => {
    loginSuccess(dispatch, token);
  };
};

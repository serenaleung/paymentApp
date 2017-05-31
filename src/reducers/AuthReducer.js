import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  token: null,
  error: null,
  loading: false
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type){
    case EMAIL_CHANGED:
      console.log(action.payload);
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      console.log(action.payload);
      return { ...state, password: action.payload };
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      console.log(action.payload);
      return { ...state, loading: false, token: action.payload };
    case LOGIN_FAILED:
      return { ...state, loading: false, password: '', error: action.payload };
    case LOGOUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

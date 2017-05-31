import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BillReducer from './BillReducer';

export default combineReducers({
  auth: AuthReducer,
  bill: BillReducer,
});

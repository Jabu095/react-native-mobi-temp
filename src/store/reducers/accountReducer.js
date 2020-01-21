import {combineReducers} from 'redux';
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
} from '../types';

const initUserState = {
  user: null,
  isLoading: false,
  error: '',
  isSuccess: false,
};

const loginReducer = (state = initUserState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
        isSuccess: false,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        error: '',
        isSuccess: true,
      };
    case LOGIN_REQUEST_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  accountLogin: loginReducer,
});

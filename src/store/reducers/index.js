import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import accountsReducer from './accountReducer';

const root = combineReducers({
  form: formReducer,
  accountsReducer,
});

export default root;

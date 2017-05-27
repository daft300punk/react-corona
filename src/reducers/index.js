import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import selectedOptions from './selectedOptions';

 export default combineReducers({
   selectedOptions,
   routing: routerReducer
 });

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import selectedOptions from './selectedOptions';
import globeData from './globeData';

 export default combineReducers({
   selectedOptions,
   globeData,
   routing: routerReducer
 });

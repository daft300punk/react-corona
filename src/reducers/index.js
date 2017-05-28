import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import selectedOptions from './selectedOptions';
import globeData from './globeData';
import firstLoad from './fristLoad';

 export default combineReducers({
   selectedOptions,
   globeData,
   firstLoad,
   routing: routerReducer
 });

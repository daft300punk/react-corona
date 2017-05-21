import { combineReducers } from 'redux';
import dummyReducer from './dummyReducer';
import { routerReducer } from 'react-router-redux';

 export default combineReducers({
   dummyReducer,
   routing: routerReducer
 });

import { createStore, compose } from 'redux';
import rootReducer from './reducers/reducer';

let store = createStore(rootReducer);

export default store;
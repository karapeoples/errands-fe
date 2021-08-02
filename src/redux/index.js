import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import errandReducer from './errands/reducer'
import userReducer from './user/reducer'


const rootReducer = combineReducers({
  errands: errandReducer,
  users: userReducer,
})





const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('THIS IS THE STORE!', store.getState()));
export default store;

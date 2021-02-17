import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';
import coinReducer from './coinReducer';
import searchReducer from './searchReducer';

const reducers = combineReducers({
  portfolio: portfolioReducer,
  coinDetail: coinReducer,
  search: searchReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

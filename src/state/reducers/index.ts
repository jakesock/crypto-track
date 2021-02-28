import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';
import coinReducer from './coinReducer';
import searchReducer from './searchReducer';
import trendingReducer from './trendingReducer';
import preferencesReducer from './preferencesReducer';

const reducers = combineReducers({
  portfolio: portfolioReducer,
  coinDetail: coinReducer,
  search: searchReducer,
  trending: trendingReducer,
  preferences: preferencesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

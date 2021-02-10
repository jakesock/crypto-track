import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';
import coinReducer from './coinReducer';

const reducers = combineReducers({
  portfolio: portfolioReducer,
  coinDetail: coinReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

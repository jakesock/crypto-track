import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';

const reducers = combineReducers({
  portfolio: portfolioReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

import { Action } from 'redux';
import { RootState } from './reducers';
import { ThunkAction } from 'redux-thunk';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

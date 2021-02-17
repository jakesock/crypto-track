import {
  SearchCoinsAction,
  SetSearchLoadingAction,
  SetSearchFailedAction,
} from '../actions';
import { AppThunk } from '../AppThunk';
import { Dispatch } from 'redux';
import { ActionType } from '../actionTypes';
import { api } from '../../apis';
import { SearchResult } from '../Coin';

export const searchCoins = (term: string): AppThunk => async (
  dispatch: Dispatch<SearchActions>,
) => {
  try {
    dispatch({ type: ActionType.SET_SEARCH_LOADING });

    const { data } = await api.searchCoins(term);
    const coins: SearchResult = data.coins;

    if (coins && coins.length) {
      dispatch({ type: ActionType.SEARCH_COINS, payload: coins });
    } else {
      dispatch({ type: ActionType.SET_SEARCH_FAILED });
    }
  } catch (err) {
    console.log(err);
  }
};

type SearchActions =
  | SearchCoinsAction
  | SetSearchLoadingAction
  | SetSearchFailedAction;

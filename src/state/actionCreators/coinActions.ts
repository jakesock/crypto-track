import { AppThunk } from '../AppThunk';
import { Dispatch } from 'redux';
import { ActionType } from '../actionTypes';
import { GetCoinAction, SetCoinLoadingAction } from '../actions';
import { api } from '../../apis';
import { useArrayToObject } from '../../hooks/useArrayToObject';
import { CoinsListState } from '../Coin';

export const getCoin = (id: string): AppThunk => async (
  dispatch: Dispatch<GetCoinAction | SetCoinLoadingAction>,
  getState,
) => {
  try {
    dispatch({ type: ActionType.SET_COIN_LOADING });

    const preferredCurrency = getState().portfolio.preferredCurrency;

    const { data } = await api.getCoinsMarkets(id, preferredCurrency);
    const coin: CoinsListState = useArrayToObject(data, 'id');

    dispatch({ type: ActionType.GET_COIN, payload: coin });
  } catch (err) {
    console.log(err);
  }
};

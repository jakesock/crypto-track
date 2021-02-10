import { AppThunk } from '../AppThunk';
import { Dispatch } from 'redux';
import { ActionType } from '../actionTypes';
import { GetCoinAction, SetCoinLoadingAction } from '../actions';
import { api } from '../../apis';
import {
  Coin,
  CoinHistoryTimeFrames,
  getCoinHistoryLabel,
  PriceHistoryList,
} from '../Coin';

export const getCoin = (
  id: string,
  preferredCurrency: string,
  numDays: CoinHistoryTimeFrames,
): AppThunk => async (dispatch: Dispatch<GetCoinAction | SetCoinLoadingAction>) => {
  try {
    dispatch({ type: ActionType.SET_COIN_LOADING });

    const coinDetails = await api.getCoinDetails(id, preferredCurrency);
    const coinHistory = await api.getCoinHistory(id, preferredCurrency, numDays);

    const coin: Coin = coinDetails.data[0];
    const priceHistory: PriceHistoryList = coinHistory.data.prices;
    const label = getCoinHistoryLabel(numDays);

    dispatch({
      type: ActionType.GET_COIN,
      payload: {
        detail: coin,
        priceHistory,
        label,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

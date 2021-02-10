import { Dispatch } from 'redux';
import { ActionType } from '../actionTypes';
import {
  GetPortfolioAction,
  DeletePortfolioCoinAction,
  SetPortfolioLoadingAction,
} from '../actions';
import { api } from '../../apis';
import { CoinsListState } from '../Coin';
import { DEFAULT_COINS } from '../../constants';
import { useArrayToObject } from '../../hooks/useArrayToObject';
import { AppThunk } from '../AppThunk';

export const getPortfolio = (): AppThunk => async (
  dispatch: Dispatch<GetPortfolioAction | SetPortfolioLoadingAction>,
) => {
  try {
    dispatch({ type: ActionType.SET_PORTFOLIO_LOADING });

    const preferredCurrency = localStorage.getItem('preferredCurrency') || 'usd';
    const favorites = localStorage.getItem('favorites')?.split(',') || DEFAULT_COINS;
    const coinsList = localStorage.getItem('coinsList') || DEFAULT_COINS.join(',');

    let coins: CoinsListState;
    if (coinsList && coinsList.length) {
      const { data } = await api.getCoinDetails(coinsList, preferredCurrency);
      coins = useArrayToObject(data, 'id');
    } else {
      coins = {};
    }

    dispatch({
      type: ActionType.GET_PORTFOLIO,
      payload: {
        coins,
        order: coinsList.split(','),
        favorites,
        preferredCurrency,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deletePortfolioCoin = (id: string): DeletePortfolioCoinAction => {
  return {
    type: ActionType.DELETE_PORTFOLIO_COIN,
    payload: id,
  };
};

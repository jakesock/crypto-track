import { Dispatch } from 'redux';
import { ActionType } from '../actionTypes';
import { Action, DeleteCoinAction } from '../actions';
import { api } from '../../apis';
import { Coin, CoinsListState } from '../Coin';
import { DEFAULT_COINS } from '../../constants';

export const getPortfolio = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SET_PORTFOLIO_LOADING });

  const preferredCurrency = localStorage.getItem('preferredCurrency') || 'usd';
  const favorites = localStorage.getItem('favorites')?.split(',') || DEFAULT_COINS;
  const coinsList = localStorage.getItem('coinsList') || DEFAULT_COINS.join(',');

  let coins: CoinsListState;
  if (coinsList && coinsList.length) {
    const { data } = await api.getCoinsMarkets(coinsList, preferredCurrency);
    coins = transformCoinData(data);
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
};

export const deleteCoin = (id: string): DeleteCoinAction => {
  return {
    type: ActionType.DELETE_COIN,
    payload: id,
  };
};

const transformCoinData = (coinArray: Coin[]) => {
  const coins = coinArray.map((coin: Coin) => {
    return {
      [coin.id]: {
        ...coin,
      },
    };
  });

  return Object.assign({}, ...coins);
};

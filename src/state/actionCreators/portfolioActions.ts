import { api } from '../../apis';
import { useArrayToObject } from '../../hooks/useArrayToObject';
import { DEFAULT_COINS } from '../../constants';
import { Dispatch } from 'redux';
import { ActionType } from '../actionTypes';
import { AppThunk } from '../AppThunk';
import {
  GetPortfolioAction,
  DeletePortfolioCoinAction,
  SetPortfolioLoadingAction,
} from '../actions';
import { CoinHistoryTimeFrames, CoinsListState, PriceHistoryList } from '../Coin';

export const getPortfolio = (): AppThunk => async (
  dispatch: Dispatch<GetPortfolioAction | SetPortfolioLoadingAction>,
) => {
  try {
    // Set loading state to true
    dispatch({ type: ActionType.SET_PORTFOLIO_LOADING });

    const preferredCurrency = localStorage.getItem('preferredCurrency') ?? 'usd';

    // Get saved coins from local storage
    const savedCoins = localStorage.getItem('coinsList') ?? DEFAULT_COINS.join(',');

    // Get details for each coin and convert data to an object for easier selection
    const coinsResponse = await api.getCoinDetails(savedCoins, preferredCurrency);
    const coins: CoinsListState = useArrayToObject(coinsResponse.data, 'id') ?? {};

    // Make top 3 saved coins favorites to display on home page
    const favorites = savedCoins.split(',', 3);
    const historyResponse = await api.getCoinHistory(
      favorites[0],
      preferredCurrency,
      CoinHistoryTimeFrames.day,
    );
    const favoriteHistory: PriceHistoryList = historyResponse.data.prices;

    dispatch({
      type: ActionType.GET_PORTFOLIO,
      payload: {
        coins,
        order: savedCoins.split(','),
        favorites,
        favoriteHistory,
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

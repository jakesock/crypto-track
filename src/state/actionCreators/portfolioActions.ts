import { api } from '../../apis';
import { DEFAULT_COINS } from '../../constants';
import { Dispatch } from 'redux';
import { ActionType } from '../actionTypes';
import { AppThunk } from '../AppThunk';
import {
  GetPortfolioAction,
  DeletePortfolioCoinAction,
  SetPortfolioLoadingAction,
} from '../actions';
import { CoinHistoryTimeFrames, CoinHistoryList } from '../Coin';

export const getPortfolio = (): AppThunk => async (
  dispatch: Dispatch<GetPortfolioAction | SetPortfolioLoadingAction>,
  getState,
) => {
  try {
    // Set loading state to true
    dispatch({ type: ActionType.SET_PORTFOLIO_LOADING });

    // Get preferred currency from store
    const { preferences } = getState();
    const preferredCurrency = preferences.currency.id;

    // Get saved coins from local storage
    const savedCoins = localStorage.getItem('coinsList') ?? DEFAULT_COINS.join(',');

    // Get details for each coin and convert data to an object for easier selection
    const coinsResponse = await api.getCoinDetails(savedCoins, preferredCurrency);
    const coins = arrayToObject(coinsResponse.data, 'id') ?? {};

    // Make top 3 saved coins favorites to display on home page
    const favorites = savedCoins.split(',', 3);
    const historyResponse = await api.getCoinHistory(
      favorites[0],
      preferredCurrency,
      CoinHistoryTimeFrames.day,
    );
    const favoriteHistory: CoinHistoryList = historyResponse.data.prices;

    dispatch<GetPortfolioAction>({
      type: ActionType.GET_PORTFOLIO,
      payload: {
        coins,
        order: savedCoins.split(','),
        favorites,
        favoriteHistory,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deletePortfolioCoin = (id: string): AppThunk => async (
  dispatch: Dispatch<DeletePortfolioCoinAction>,
  getState,
) => {
  try {
    const {
      portfolio: { order },
      preferences: { currency },
    } = getState();

    // Update coin list order and favorites list
    // I originally had this in the reducer but I needed to make an API call
    // to update the graph on the home page. Will be revisiting this.
    const updatedOrder = order.filter((coin) => coin !== id);
    const favorites = updatedOrder.slice(0, 3);

    const { data } = await api.getCoinHistory(
      favorites[0],
      currency.id,
      CoinHistoryTimeFrames.day,
    );
    const favoriteHistory: CoinHistoryList = data.prices;

    dispatch({
      type: ActionType.DELETE_PORTFOLIO_COIN,
      payload: {
        id,
        order: updatedOrder,
        favorites,
        favoriteHistory,
      },
    });
  } catch (err) {
    console.log('deletePortfolioCoin', err);
  }
};

export function arrayToObject<T>(array: T[], key: string): { [key: string]: T } {
  const initialValue = {};
  return array.reduce((object, item) => {
    return {
      ...object,
      [item[key]]: item,
    };
  }, initialValue);
}

import { SetTrendingLoadingAction, GetTrendingAction } from '../actions';
import { AppThunk } from '../AppThunk';
import { Dispatch } from 'redux';
import { ActionType } from '../actionTypes';
import { api } from '../../apis';

export const getTrending = (): AppThunk => async (
  dispatch: Dispatch<SetTrendingLoadingAction | GetTrendingAction>,
) => {
  try {
    dispatch({ type: ActionType.SET_TRENDING_LOADING });

    const { data } = await api.getTrendingCoins();

    dispatch({
      type: ActionType.GET_TRENDING,
      payload: data.coins,
    });
  } catch (err) {
    console.log(err);
  }
};

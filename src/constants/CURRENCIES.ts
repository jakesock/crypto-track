import { arrayToObject } from 'src/state/actionCreators';
import { Currency } from '../state';

export const CURRENCIES_LIST: Currency[] = [
  {
    id: 'usd',
    name: 'US Dollar',
    symbol: '$',
  },
  {
    id: 'eur',
    name: 'Euro',
    symbol: '€',
  },
  {
    id: 'gbp',
    name: 'British Pound',
    symbol: '£',
  },
  {
    id: 'inr',
    name: 'Indian Rupee',
    symbol: '₹',
  },
  {
    id: 'aud',
    name: 'Australian Dollar',
    symbol: '$',
  },
  {
    id: 'nzd',
    name: 'New Zealand Dollar',
    symbol: '$',
  },
  {
    id: 'cad',
    name: 'Canadian Dollar',
    symbol: '$',
  },
  {
    id: 'sgd',
    name: 'Singapore Dollar',
    symbol: '$',
  },

  {
    id: 'chf',
    name: 'Swiss Franc',
    symbol: 'CHF',
  },
  {
    id: 'myr',
    name: 'Malaysian Ringgit',
    symbol: 'RM',
  },
  {
    id: 'jpy',
    name: 'Japanese Yen',
    symbol: '¥',
  },
  {
    id: 'cny',
    name: 'Chinese Yuan Renminbi',
    symbol: '¥',
  },
  {
    id: 'zar',
    name: 'South African Rand',
    symbol: 'R',
  },
];

export const CURRENCIES = arrayToObject(CURRENCIES_LIST, 'id');

import { CoinResult } from '../../../state/Coin';

interface SearchResultProps {
  coin: CoinResult;
}

const SearchResult: React.FC<SearchResultProps> = ({ coin }) => {
  return <div>{coin.name}</div>;
};

export default SearchResult;

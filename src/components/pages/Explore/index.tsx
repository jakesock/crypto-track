import SearchBar from '../../SearchBar';
import SearchResultsList from '../../SearchResultsList';
import Trending from '../../Trending';

const Explore: React.FC = () => {
  return (
    <div>
      <h2>Explore</h2>
      <SearchBar />
      <SearchResultsList />
      <Trending />
    </div>
  );
};

export default Explore;

import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Home: React.FC = () => {
  const favorites = useTypedSelector((state) => {
    return state.portfolio.favorites;
  });

  if (favorites.length) {
    console.log(favorites);
  }

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;

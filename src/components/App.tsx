import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import CoinSummary from './pages/CoinSummary';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={CoinSummary} exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;

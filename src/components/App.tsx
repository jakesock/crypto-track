import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, Container, CssBaseline } from '@material-ui/core';

import Navbar from './Navbar';
import CoinSummary from './pages/CoinSummary';
import CoinDetail from './pages/CoinDetail';

import { lightTheme, darkTheme } from '../theme';
import { useStyles } from './styles';

const App: React.FC = () => {
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const classes = useStyles();

  const handleThemeChange = () => {
    setisDarkTheme(!isDarkTheme);
  };

  return (
    <div className={classes.root}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Navbar />
            <button onClick={handleThemeChange}>
              Set {`${isDarkTheme ? 'Light' : 'Dark'}`} Theme
            </button>
            <Switch>
              <Route path="/" component={CoinSummary} exact />
              <Route path="/coin/:id" component={CoinDetail} />
            </Switch>
          </Container>
        </MuiThemeProvider>
      </Router>
    </div>
  );
};

export default App;

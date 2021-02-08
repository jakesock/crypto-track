import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, Container, CssBaseline, Grow } from '@material-ui/core';

import Navbar from './Navbar';
import Home from './pages/Home';
import MyPortfolio from './pages/MyPortfolio';
import CoinDetail from './pages/CoinDetail';
import Explore from './pages/Explore';

import { lightTheme, darkTheme } from '../theme';
import { useStyles } from './styles';

const App: React.FC = () => {
  const [isDarkTheme, setisDarkTheme] = useState(true);
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
          <Grow in {...{ timeout: 800 }}>
            <Container maxWidth="lg">
              <Navbar
                isDarkTheme={isDarkTheme}
                handleThemeChange={handleThemeChange}
              />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/portfolio" component={MyPortfolio} />
                <Route path="/coin/:id" component={CoinDetail} />
                <Route path="/explore" component={Explore} />
              </Switch>
            </Container>
          </Grow>
        </MuiThemeProvider>
      </Router>
    </div>
  );
};

export default App;

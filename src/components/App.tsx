import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, Container, CssBaseline, Grow } from '@material-ui/core';

import { useActions } from '../hooks/useActions';

import Navbar from './Navbar';
import Home from './pages/Home';
import MyPortfolio from './pages/MyPortfolio';
import CoinDetail from './pages/CoinDetail';
import Explore from './pages/Explore';
import NotFound from './pages/NotFound';
import Footer from './Footer';

import { lightTheme, darkTheme } from '../theme';
import { useStyles } from './styles';

const App: React.FC = () => {
  const [isDarkTheme, setisDarkTheme] = useState(true);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const classes = useStyles();

  const handleThemeChange = () => {
    setisDarkTheme(!isDarkTheme);
  };

  const { getPortfolio } = useActions();

  useEffect(() => {
    getPortfolio();
  }, [getPortfolio]);

  return (
    <div className={classes.root}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div>
            <Grow in timeout={350}>
              <Container maxWidth="lg">
                <Navbar
                  isDarkTheme={isDarkTheme}
                  handleThemeChange={handleThemeChange}
                />
              </Container>
            </Grow>
            <Grow in timeout={550}>
              <Container component="main" maxWidth="lg">
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/portfolio" component={MyPortfolio} />
                  <Route path="/coin/:id" component={CoinDetail} />
                  <Route path="/explore" component={Explore} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </Container>
            </Grow>
          </div>
          <div>
            <Grow in timeout={750}>
              <Container maxWidth="lg">
                <Footer />
              </Container>
            </Grow>
          </div>
        </MuiThemeProvider>
      </Router>
    </div>
  );
};

export default App;

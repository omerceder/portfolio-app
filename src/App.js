import React, { Fragment, useState } from 'react';
import { makeStyles, Grid, AppBar, Tabs, Tab, Avatar } from '@material-ui/core';
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import About from './components/About';
import Kanye from './components/Kanye';
import Contact from './components/Contact';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(180deg, #212121 60%, #2f387d 96%)',
    height: '100vh',
    color: 'white',
    '& .fullview': {
      height: '100%'
    },
    '& .cardContainer': {
      display: 'grid',
      alignItems: 'center'
    },
    '& .card': {
      maxHeight: '800px'
    },
  },
});

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  const classes = useStyles();

  const allTabs = ['/about', '/kanye', '/contact'];

  return (
    <div className={classes.root}>

      <BrowserRouter>
        <Route exact path="/">
            <Redirect to="/about" />
        </Route>
        <div className="App" className="fullview">
          <Route
            path="/"
            render={({ location }) => (
              <Fragment>
                <Grid
                    container
                    alignItems="center"
                    className="fullview"
                >
                  <AppBar>
                    <Tabs value={location.pathname}>
                      <Tab label="About" value="/about" component={Link} to={allTabs[0]} />
                      <Tab label="Kanye" value="/kanye" component={Link} to={allTabs[1]} />
                      <Tab
                        value="/contact"
                        label="Contact"
                        component={Link}
                        to={allTabs[2]}
                      />
                    </Tabs>
                  </AppBar>

                  <Switch>
                    <Route path={allTabs[0]}> <About className="fullview" /></Route>
                    <Route path={allTabs[1]}> <Kanye className="fullview" /></Route>
                    <Route path={allTabs[2]}> <Contact className="fullview" /></Route>
                  </Switch>
                </Grid>
              </Fragment>
            )}
          />
        </div>
      </BrowserRouter>

    </div>
  );
};

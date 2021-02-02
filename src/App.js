import React, { Fragment, useState } from 'react';
import { makeStyles, Grid, AppBar, Tabs, Tab, Typography, Box, Container, Card, CardContent, Avatar, Button } from '@material-ui/core';
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(180deg, #212121 60%, #2f387d 96%)',
    color: 'white',
    '& tabPanel': {
      background: 'red'
    }
  },
});

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const allTabs = ['/about', '/examples', '/contact'];


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ height: '100vh' }}>

      <BrowserRouter>
        <div className="App">
          <Route
            path="/"
            render={({ location }) => (
              <Fragment>
                <AppBar>
                  <Tabs value={location.pathname}>
                    <Tab label="About" value="/about" component={Link} to={allTabs[0]} />
                    <Tab label="Examples" value="/examples" component={Link} to={allTabs[1]} />
                    <Tab
                      value="/contact"
                      label="Contact"
                      component={Link}
                      to={allTabs[2]}
                    />
                  </Tabs>
                </AppBar>

                <Switch>
                  <Route path={allTabs[1]} render={() => <div>About</div>} />
                  <Route path={allTabs[2]} render={() => <div>Examples</div>} />
                  <Route path={allTabs[0]} render={() => <div>Contact</div>} />
                </Switch>
              </Fragment>
            )}
          />
        </div>
      </BrowserRouter>

    </div>
  );
};

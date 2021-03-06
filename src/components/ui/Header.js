import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '7em',
  },

  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    }
  }, [value]);
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar disableGutters>
          <Button
            className={classes.logoContainer}
            component={Link}
            to="/"
            disableRipple
            onClick={() => setValue(0)}
          >
            <Logo className={classes.logo} />
          </Button>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
            indicatorColor="primary"
          >
            <Tab
              className={classes.tab}
              component={Link}
              to="/"
              label="Home"
            ></Tab>
            <Tab
              className={classes.tab}
              component={Link}
              to="/services"
              label="Services"
            ></Tab>
            <Tab
              className={classes.tab}
              component={Link}
              to="/revolution"
              label="Revolution"
            ></Tab>
            <Tab
              className={classes.tab}
              component={Link}
              to="/about"
              label="About Us"
            ></Tab>
            <Tab
              className={classes.tab}
              component={Link}
              to="/contact"
              label="Contact Us"
            ></Tab>
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

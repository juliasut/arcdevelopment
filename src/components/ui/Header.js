import React from 'react';
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
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar disableGutters>
          <Logo className={classes.logo} />
          <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} label="Home"></Tab>
            <Tab className={classes.tab} label="Services"></Tab>
            <Tab className={classes.tab} label="Revolution"></Tab>
            <Tab className={classes.tab} label="About Us"></Tab>
            <Tab className={classes.tab} label="Contact Us"></Tab>
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

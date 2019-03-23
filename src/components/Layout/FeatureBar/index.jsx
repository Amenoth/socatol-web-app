import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  // Button,
  // Tooltip,
  IconButton,
  withStyles
} from '@material-ui/core';

// import { Help } from '@material-ui/icons';
import { ArrowLeft } from 'react-feather';
import styles from './styles';
import Crumbs from './Crumbs';

const FeatureBar = props => {
  const { classes, backArrow, title, history } = props;
  return (
    <AppBar component="div" color="primary" position="static" elevation={0}>
      {backArrow && (
        <Crumbs
          classes={classes}
          data={[{ name: 'Inicio' }, { name: 'Facturación' }]}
        />
      )}
      <Toolbar className={backArrow ? classes.toolbar : ''}>
        <Grid container alignItems="center" spacing={8}>
          <Grid item xs>
            <Grid container direction="row" alignItems="center">
              {backArrow && (
                <IconButton
                  color="inherit"
                  className={classes.backArrow}
                  onClick={history.goBack}>
                  <ArrowLeft siez={24} />
                </IconButton>
              )}
              <Typography color="inherit" variant="h5">
                {title ? title : ''}
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Button
              className={classes.button}
              variant="outlined"
              color="inherit"
              size="small">
              Web setup
            </Button>
          </Grid> */}
          {/* <Grid item>
            <Tooltip title="Help">
              <IconButton color="inherit">
                <Help />
              </IconButton>
            </Tooltip>
          </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(withStyles(styles)(FeatureBar));

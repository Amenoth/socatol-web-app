import React from 'react';
import styles from './styles';

// Material UI
import { Typography, Button, withStyles } from '@material-ui/core';

const HeaderDataTable = ({
  classes,
  img,
  title,
  subtitle,
  buttonLabel,
  onClick
}) => {
  return (
    <header className={classes.root}>
      <div className={classes.content}>
        <img
          alt="headerImage"
          src={
            img
              ? img
              : 'https://img.icons8.com/dusk/64/000000/merchant-account.png'
          }
          width={64}
          height={64}
        />
        <div className={classes.textContainer}>
          <Typography variant="h6" component="h1" className={classes.title}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.subtitle}>
            {subtitle}
          </Typography>
        </div>
      </div>

      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={onClick}>
        {buttonLabel}
      </Button>
    </header>
  );
};

export default withStyles(styles)(HeaderDataTable);

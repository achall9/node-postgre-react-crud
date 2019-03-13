
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SimpleLineChart from './SimpleLineChart';
import SimplePieChart from './SimplePieChart';


import {styles} from './../../theme.js';


class Dashboard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2" style={{textAlign:"left"}}>
            Classes Orders
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            <SimpleLineChart />
          </Typography>
          <Typography variant="h4" gutterBottom component="h2" style={{textAlign:"left"}}>
            Types of Classes Ordered
          </Typography>
          <div className={classes.tableContainer}>
            <SimplePieChart/>
          </div>
        </main>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);

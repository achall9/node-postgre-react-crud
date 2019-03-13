import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputIcon from '@material-ui/icons/Input';

import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const Dashboard = props => <RouterLink to="/dashboard" {...props} />
const Classes = props => <RouterLink to="/classes" {...props} />

class MainListItems extends React.Component {

  handleLogout = () => {
    //console.log('logout');
    this.props.onLogout();
  }

  render() {
    return (
      <div>
        <Link component={Dashboard} style={{textDecoration: "none"}}>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{padding:16}} />
          </ListItem>
        </Link>
          
        <Link component={Classes} style={{textDecoration: "none"}}>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Classes" style={{padding:16}} />
          </ListItem>
        </Link>

        <ListItem button onClick={this.handleLogout}>
          <ListItemIcon>
            <InputIcon />
          </ListItemIcon>
          <Link to="/logout" style={{textDecoration: "none"}}>
            <ListItemText primary="Log out" style={{padding:16}}/>
          </Link>
        </ListItem>
      </div>
    )
  }
}

export default MainListItems;


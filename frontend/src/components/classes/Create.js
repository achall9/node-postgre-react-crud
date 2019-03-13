import React, { Fragment, Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300,
    },
    button: {
        
    }
});

export default withStyles(styles)(class Create extends Component {
    state = {
        open: false,
        class_unit: {
            name: '',
            description: '',
            price: '',
            location: '',
            start_timestamp: '',
            end_timestamp: ''
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({ target: { value }}) => {
        this.setState({
            class_unit: {
                ...this.state.class_unit,
                [name]: value
            }
        })
    }

    handleSubmit = () => {
        const { class_unit } = this.state
        console.log(class_unit);
        this.props._onCreate(class_unit);
        this.handleToggle();
    }

    render() {
        const { open, class_unit: { name, description, price, location, start_timestamp, end_timestamp } } = this.state
        const { classes } = this.props
        return (
            <Fragment>
                <Button variant="contained" size="large" color="primary" onClick={this.handleToggle} style={{backgroundColor: "black" }} >
                    <AddIcon />
                    <Typography style={{color: "white"}}>Add Class</Typography>
                </Button>
                <Dialog
                open={open}
                onClose={this.handleToggle}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title" className={classes.togglehead} style={{backgroundColor: "black"}}>
                    <Typography style={{color: "white"}}>Add Class</Typography>
                </DialogTitle>
                <DialogContent>
                    <form>
                        <TextField id="name" label="Name" value={name} onChange={this.handleChange('name')} className={classes.textField}/><br />
                        <TextField multiline rows="5" id="description" label="Description" value={description} onChange={this.handleChange('description')} className={classes.textField}/><br />
                        <TextField id="ticket" label="Ticket" value={price} onChange={this.handleChange('price')} className={classes.textField}/><br />
                        <TextField id="location" label="Location" value={location} onChange={this.handleChange('location')} className={classes.textField}/><br />
                        <TextField id="start_d" label="Start Date/Time" type="datetime-local" value={start_timestamp} onChange={this.handleChange('start_timestamp')} className={classes.textField}/><br />
                        <TextField id="end_d" label="End Date/Time" type="datetime-local" value={end_timestamp}  onChange={this.handleChange('end_timestamp')}  className={classes.textField}/>                        
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" style={{backgroundColor: "black"}} onClick={this.handleSubmit}>
                        Add Class
                    </Button>
                    <Button color="default" variant="contained" onClick={this.handleToggle}>
                        Cancel
                    </Button>
                </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
})

    
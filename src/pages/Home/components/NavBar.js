import React from "react";
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({

    root: {
        padding: 0,
        width: 275,
        height: 100, 
        color: '#f44336',
    },

});

function NavBar() {
    const classes = useStyles(); 

    return(
        <Paper elevation='0' color='none' className={classes.root}>
            NavBar
        </Paper>
    )
}


export default NavBar;
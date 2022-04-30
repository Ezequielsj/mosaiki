import React from "react";
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles((theme) => ({

    root: {

        //padding: theme.spacing(0),
        width: 275,
        height: 300,
    },

}));




/*const useStyles = makeStyles({

    root: {
        width: 275,
        height: 100, 
    },

});*/

function NavBar() {
    const classes = useStyles(); 

    return(
        <Paper className={classes.root}>
            NavBar
        </Paper>
    )
}


export default NavBar;
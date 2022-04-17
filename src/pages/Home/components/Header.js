import React from 'react';
//import '../style.css';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
        
},
img: {
   maxHeight: 52,  
},

grow: {
    flexGrow: 1,
},

userSection: {
    display: 'flex',
    alignItems: 'center',
},

bell:{
    marginRight: 10, 

},

});

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="inherit" classesName={classes.appBar}> 
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img} />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src="" />
                </div>
                
                {/* <div>
                    <a href="/">Mosaiki</a>
                    <input type="text"></input>
                </div>
                <div>
                    <span>img1</span>
                    <span>img1.2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;
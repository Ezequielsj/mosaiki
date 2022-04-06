import React from 'react';
//import '../style.css';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const useStyles = makeStyles({

});

function Header() {
    return (
        <AppBar> 
            <Toolbar>
                <div>
                    <a href="/">Mosaiki</a>
                    <input type="text"></input>
                </div>
                <div>
                    <span>img1</span>
                    <span>img1.2</span>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
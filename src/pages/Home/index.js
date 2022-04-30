import React from 'react';
//import './style.css';
import { makeStyles } from '@mui/styles';

import Header from './components/Header';
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import NewPost from './components/NewPost';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        height: '100vh',
        
    },

    toolbar : {
        minHeight: 80,
        
        
    }
}) 

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="xl">
                    <Box display="flex">
                        <NavBar />
                      <div>
                        <NewPost />
                        <Feed />
                     </div>
                        <NavBar2 />
                    </Box>
                </Container>
                    
            </main>
        </div>

    )
}

export default Home;
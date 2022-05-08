import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import { textAlign } from '@mui/system';



const useStyles = makeStyles((createTheme) => ({
    root: {
        height: '100vh'
    },
    
    img: {
        maxHeight: 270,  
     },

     Button: {
         marginTop: 15,
     },

     form: {
         marginRight: '8%',
         marginLeft: '16%', 
        
     },

     image: {
         padding: '16',
         textAlign: 'center',
         
     }


}));

function SignIn() {
    const classes = useStyles(); 

    return (
        <Grid container className={classes.root}>
            <Grid
             item 
             container
             direction="column"
             justifyContent="center"
             alignItems="center"
             backgroundColor= 'Black'
             md={7}>

            <image className={classes.image}>
                <img src="/images/logoBlack.jpeg" alt="logo" className={classes.img} />
                <Typography style={{color: '#fff', fontSize: 50, lineHeight: '50px'}}>
                   <strong>Mosaiki</strong>
                </Typography>

                <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 25, lineHeight: '30px'}}>
                    Dois pensam melhor do que um, mil pensam melhor do que dois.
                </Typography>
            </image>

            </Grid>

            <Grid item md={5}>
                <Box display="flex" flexDirection="column" alignItems="center" mt={8} >
                    {/* <Avatar className={classes.avatar} > */}

                    <LockSharpIcon color='primary' sx={{ fontSize: 40 }}/>
                    

                    {/* </Avatar> */}
                    
                    <Typography variant='h6'>
                        <strong>Acesso</strong>
                    </Typography>

                    <form className={classes.form}>
                        <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='E-mail'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        />

                        <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='password'
                        label='Senha'
                        type='password'
                        name='password'
                        autoComplete='current-password'
                        />
                        <div className={classes.Button}>
                        <Button
                        
                        variant='contained'
                        color='primary'
                        fullWidth>
                            Entrar
                        </Button>
                        </div>

                        <Grid container>
                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem uma conta? registrar</Link>
                            </Grid>
                            


                        </Grid>

                    </form>

                </Box>

            </Grid>




        </Grid>
        
        /* <div className={classes.root}>
            <div className={classes.left}>

                <img src="/images/logoBlack.jpeg" alt="logo" className={classes.img} />
                <Typography style={{color: '#fff', fontSize: 50, lineHeight: '50px'}}>
                   <strong>Mosaiki</strong>
                </Typography>

                <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 25, lineHeight: '30px'}}>
                    Dois pensam melhor do que um, mil pensam melhor do que dois.
                </Typography>
            </div>

            <div className={classes.right}>
                <form className={classes.form}>
                    <h4>Acesso</h4>
                    <input type="text" />
                    <input type="text" />

                </form>
            </div>
        </div> */
    )
}

export default SignIn;
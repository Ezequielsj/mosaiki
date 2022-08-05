import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import { textAlign } from '@mui/system';
import { useNavigate } from 'react-router';
import FormHelperText from '@mui/material/FormHelperText';

import authService from '../../services/authService';

const useStyles = makeStyles((Theme) => ({
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
         marginRight: '3%',
         marginLeft: '6%', 
        
     },

     image: {
         padding: '16',
         textAlign: 'center',
     },

     senha: {
         paddingRight: 5,

     }


}));

function SignIn() {
    const classes = useStyles(); 
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();

    

    async function handleSignIn () {
        // chamada a api da nossa aplicação
        // se retorno ok, direciona para home
        // se não exibe mensagem para o usuario

        try {
            await authService.signIn(email, password);
            //200
            navigate('/')
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
        
    }

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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}

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
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                        <div className={classes.Button}>
                        <Button
                        
                        variant='contained'
                        color='primary'
                        fullWidth
                        onClick={handleSignIn}
                        >
                            Entrar
                        </Button>

                        </div>
                        {
                             errorMessage &&
                            <FormHelperText error>
                                {errorMessage}
                            </FormHelperText>
                        }

                        <Grid container>
                            <Grid item className={classes.senha}>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem uma conta? registrar!</Link>
                            </Grid>
                            


                        </Grid>

                    </form>

                </Box>

            </Grid>




        </Grid>
        
      
    )
}

export default SignIn;
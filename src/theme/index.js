import { createTheme } from '@mui/material/styles';
import palette from './palette';

const theme = createTheme ({
    palette,

    typography: {
        h1: {
            fontWeight: 500,
            fontSize: 35,
            letterSpacing: '-0,24px',
        },
        h2: {
            fontWeight: 500,
            fontSize: 29,
            letterSpacing: '-0,24px',
        },
        h3: {
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: '-0,06px',
        },
        h4: {
            fontWeight: 500,
            fontSize: 20,
            letterSpacing: '-0,005px',
        },
        h5: {
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: '-0,005px',
        },
        h6: {
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: '-0,005px',
        },


    
    }
})

export default theme;
    

        
    
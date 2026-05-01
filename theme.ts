import { createTheme } from '@mui/material/styles';

export const theme = (mode: 'light' | 'dark') => createTheme({
    palette: {
        mode,
        primary: {
        main: '#1976d2',
        }, 
    }
});
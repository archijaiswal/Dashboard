import './App.css';
import Home from './components/Home';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        // default: '#1F2129'
        // default: '#20272C',      
        default:'#1F2129',
        paper: '#2A3035',
     
      },
      primary: {
        main: '#3FA268',
      },
      secondary: {
        main: '#FEFEFE',
      },
      
    },
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
      button: {
        textTransform: 'none'
      }
      }
 });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Routes /> */}
      <Home />
    </ThemeProvider>
  );
}


export default App;

import React from 'react';
import { Button, ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import Home from './Home';


const useStyles = makeStyles({
  root: {
  }
})

function App() {

  const theme = createTheme({
    palette: {
      primary:{
        main: '#263579',
      }, 
      secondary: {
        main: '#1DB6DF',
      }
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>    
  );
}

export default App;

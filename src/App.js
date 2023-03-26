import React, { cloneElement, useState } from 'react';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Toolbar,
  Container,
} from '@mui/material';
import './App.css';
import { Box } from '@mui/system';
import AppToolbar from './AppToolbar';
import AppTable from './AppTable';

const themeDark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1b1b1f'
    },
    text: {
      primary: '#dbe2f9'
    }
  },
});

const themeLight = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fefbff'
    },
    text: {
      primary: '#141b2c'
    }
  },
});

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
      <CssBaseline />
      <AppToolbar
        darkThemeEnabled = {darkTheme}
        onClick = {toggleTheme}/>
      <Toolbar />
      <Container>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center' 
        }}>
          <AppTable darkTheme={darkTheme} sx={{width:　'60%'}}/>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
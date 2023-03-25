import React, { useState } from 'react';
import {
  Typography,
  CssBaseline,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { PhotoCameraOutlined } from '@mui/icons-material';
import './App.css';
import { apps } from './applist';
import { Box } from '@mui/system';
import AppToolbar from './AppToolbar';

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const onThemeChanged = (event) => {
    setDarkTheme(event.target.checked);
  };

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
      <CssBaseline />
      <AppToolbar
        darkThemeEnabled = {darkTheme}
        onThemeChanged = {onThemeChanged}/>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>App</TableCell>
              <TableCell>Original icon</TableCell>
              <TableCell>Dynamic-themed icon</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {apps.map((app) => (
            <TableRow
              key={app}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"><Typography variant='title'>{app}</Typography></TableCell>
              <TableCell><Box component={'img'} className='app-icon' src={`/icons/color/${app}.png`}/></TableCell>
              <TableCell><Box component={'img'} className='app-icon' src={`/icons/${darkTheme ? 'dark' : 'light'}/${app}.png`}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default App;
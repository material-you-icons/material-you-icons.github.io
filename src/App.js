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
  Link,
  Stack
} from '@mui/material';
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
              <TableCell component="th" scope="row">
                <Stack spacing={1}>
                  <Typography variant='h6'>{app.name}</Typography>
                  {app.playstore && 
                    <Link href={`https://play.google.com/store/apps/details?id=${app.playstore}`}>
                      <Typography variant='subtitle2'>Playstore</Typography>
                    </Link>
                  }
                </Stack>
              </TableCell>
              <TableCell><Box component={'img'} className='app-icon' src={`/icons/color/${app.file}.png`}/></TableCell>
              <TableCell><Box component={'img'} className='app-icon' src={`/icons/${darkTheme ? 'dark' : 'light'}/${app.file}.png`}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default App;
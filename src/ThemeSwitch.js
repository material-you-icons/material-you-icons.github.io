import React from 'react';
import Switch from '@mui/material/Switch';

export default function ThemeSwitch({darkThemeEnabled, onThemeChanged}) {
  return (
    <Switch
      checked={darkThemeEnabled}
      onChange={onThemeChanged}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
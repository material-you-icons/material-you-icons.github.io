import React from 'react';
import { IconButton } from '@mui/material';
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';

export default function ThemeSwitch(props) {
  return (
    <IconButton 
      size="large" 
      onClick={props.onClick}
    >
      {props.darkThemeEnabled ? <LightModeRounded/> : <DarkModeRounded/>}
    </IconButton>
  );
}
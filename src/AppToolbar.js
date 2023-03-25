import React from 'react';
import { 
    AppBar,  
    Toolbar, 
    Typography 
} from "@mui/material";
import { Box } from "@mui/system";
import ThemeSwitch from './ThemeSwitch';

export default function AppToolbar({darkThemeEnabled, onThemeChanged}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Material You Icons
                    </Typography>
                    <ThemeSwitch 
                        darkThemeEnabled = {darkThemeEnabled}
                        onThemeChanged = {onThemeChanged} />
                </Toolbar>
            </AppBar>
        </Box>
    ); 
}
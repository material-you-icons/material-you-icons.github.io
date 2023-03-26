import React, { cloneElement } from 'react';
import { PropTypes } from 'prop-types';
import { 
    AppBar,  
    Box,  
    Button,  
    Link,  
    Stack,  
    Toolbar, 
    Typography, 
    useScrollTrigger
} from "@mui/material";
import ThemeSwitch from './ThemeSwitch';
import { fontSize } from '@mui/system';

function ElevationScroll(props) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    let onScrolledColor = props.darkThemeEnabled ? '#3f4759' : '#dbe2f9'
    let notScrolledColor = props.darkThemeEnabled ? '#1b1b1f' : '#fefbff'
    let textColor = props.darkThemeEnabled ? '#dbe2f9' : '#141b2c'

    return cloneElement(props.children, {
        style: {
            backgroundColor: trigger ? onScrolledColor : notScrolledColor,
            color: textColor
        }
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired
};

export default function AppToolbar(props) {
    return (
        <ElevationScroll {...props}>
            <AppBar elevation={0}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '24px' }} fontWeight={600}>
                        Material You Icons
                    </Typography>
                    <Stack direction='row'>
                        <Button 
                            href='https://github.com/material-you-icons/material-you-icons.github.io/issues/new?title=Icon+Suggestion&body=Thanks!+Please+provide+App+name+and+Playstore+link'
                            target='_blank'
                            sx = {{ textTransform: 'capitalize' }}
                        >
                            <Typography variant='title1'>Suggest Icon</Typography>
                        </Button>
                        <ThemeSwitch {...props}/>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    ); 
}
// create a search bar component with autocomplete using mui
import React from 'react';
import TextField from '@mui/material/TextField';

export default function AppSearchBar() {
    return (
        <TextField
          id="filled-search"
          label="Search app"
          type="search"
          variant="outlined"
        />
    );
}
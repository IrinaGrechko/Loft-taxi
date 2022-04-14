import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import {Stack} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Link} from 'react-router-dom'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function HeaderMenu(props) {

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed">
        <Stack direction="row"
               justifyContent="flex-end"
               alignItems="center"
               spacing={2}>
          <Link to="/map">Карта</Link>
          <Link to="/profile">Профиль</Link>
          <Button color="inherit" onClick= {props.unauthenticate}>
            Выйти
          </Button>
        </Stack>
      </AppBar>
    </ThemeProvider>
  );
}

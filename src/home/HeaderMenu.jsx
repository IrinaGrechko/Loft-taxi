import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import {Stack} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
          <Button color="inherit" onClick={() => {props.navigateTo("home")}}>
            Карта
          </Button>
          <Button color="inherit" onClick={() => {props.navigateTo("profile")}}>
            Профиль
          </Button>
          <Button color="inherit" onClick= {props.unauthenticate}>
            Выйти
          </Button>
        </Stack>
      </AppBar>
    </ThemeProvider>
  );
}

import React from "react";
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

  typography: {
    fontFamily: [
      '"HelveticaRegular"',
      '-apple-system',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    h1: {
      fontFamily: 'HelveticaRegular',
      fontSize: '27px',
      lineHeight: '30px',
      color: '#16213F',
    },
    h2: {
      fontFamily: 'GilroySemiBold',
      fontSize: '19px',
      lineHeight: '23px',
      color: '#16213F',
    },
    body1: {
      fontFamily: 'HelveticaRegular',
      fontSize: '19px',
      lineHeight: '22px',
      color: '#000000',
    },
    body2: {
      fontFamily: 'GilroySemiBold',
      fontSize: '16px',
      lineheight: '18px',
      color: '#000000',
    },
    subtitle1: {
      fontFamily: 'HelveticaBold',
      fontSize: '19px',
      // 10px fontSize
      lineHeight: '22px',
      color: '#000000',
    },
  },
});

const ThemeProvider = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider;

import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const MyStyledButton = withStyles({
  root: {
    textTransform: 'none',
    padding: '8px 25px',
    fontWeight: 'bold',
    border: '3px solid #C4C4C4',
    fontSize: '19px',
    lineHeight: '22px',
    background: '#FFFFFF',
    transition: 'all .3s ease-in',
    borderRadius: '28px',
    outline: 'none',
    '&:hover': {
      transition: 'all .3s ease-in',
      color: 'white',
      backgroundColor: 'C4C4C4',
      borderColor: '#C4C4C4',
    },
    '&:active':{
      outline: 'none',
    },
    '&:focus': {
    },
  },
})(Button);
const MyButton = (props) => {
  return (
    <>
      <MyStyledButton variant="contained" onClick={props.onClick}>{props.name}</MyStyledButton>
    </>
  )
}


export default MyButton
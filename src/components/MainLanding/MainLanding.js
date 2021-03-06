import React from 'react';
import { Button, Grid, MenuItem, TextField, Typography } from '@material-ui/core';
import s from './MainLanding.module.css'
import Tost from './../../img/Landing/Tost.svg'
import Pattern from './../../img/Landing/pattern.png'
import MyButton from '../../UI/Button/MyButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckBoxBuilder from '../../screens/CheckBoxBuilder/CheckBoxBuilder';
import { Link } from 'react-router-dom';
const MainLanding = () => {
  const [open, setOpen] = React.useState(false);
  const [nameOfTest, setNameOfTest] = React.useState(null)
  const [questions, setQuestions] = React.useState(5);
  const [answers, setAnswers] = React.useState(5);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeQuestions = (event) => {
    setQuestions(event.target.value);
  };
  const handleChangeAnswers = (event) => {
    setAnswers(event.target.value);
  };
  const countofQuestions = [
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
    {
      value: 6,
      label: 6,
    },
    {
      value: 7,
      label: 7,
    },
    {
      value: 8,
      label: 8,
    },
    {
      value: 9,
      label: 9,
    },
    {
      value: 10,
      label: 10,
    },
    {
      value: 11,
      label: 11,
    },
    {
      value: 12,
      label: 12,
    },
  ];
  const countofAnswers = [
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
  ];
  return (
    <Grid item container direction="column" className={s.MainLanding} alignItems="center">
      <Grid item className={s.TostText} >
        <Typography variant="h1">
          <div className={s.imgWrapper}>
            <img src={Tost} alt="Tost" />
          </div>
         - ???????? ???????????????? ?? ?????????????????? ????????????</Typography>
      </Grid>
      <Grid item style={{ paddingTop: '30px', marginBottom: '30px' }}>
        <Typography variant="body1">
          ?????????????? ???? ???????????? ??????????:
        </Typography>
      </Grid>
      <Grid item className={s.Pattern} onClick={handleClickOpen} style={{marginBottom:'10px'}}>
        <img src={Pattern} alt="pattern" />
      </Grid>
      <Grid item><Typography variant="body1">1 ?????????????????? ??????????????????</Typography></Grid>

      {/* dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">?????????????????????? ????????????</DialogTitle>
        <DialogContent>
          <Grid item container direction="column">
            <Grid item style={{ margin: '5px 0' }}><TextField label="?????????? ??????????" variant="standard" onChange={event => setNameOfTest(event.target.value)} /></Grid>
            <Grid item style={{ margin: '5px 0' }}>
              <TextField
                id="standard-select-countofQuestions"
                select
                label="?????????????????? ????????????????"
                value={questions}
                onChange={handleChangeQuestions}
                helperText="??????????????????, ?????????????? ?????????????????? ????????????????"
              >
                {countofQuestions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item style={{ margin: '5px 0' }}>
              <TextField
                id="standard-select-countofQuestions"
                select
                label="?????????????????? ????????????????????"
                value={answers}
                onChange={handleChangeAnswers}
                helperText="??????????????????, ?????????????? ?????????????????? ????????????????????"
              >
                {countofAnswers.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>

          <Link
            to={{
              pathname: '/template',
              state: {
                nameOfTest,
                questions,
                answers,
              }
            }}
            style={{ textDecoration: 'none' }}
          >
            <Button onClick={handleClose} color="primary" autoFocus>
              Ok
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </Grid>
  )

}


export default MainLanding;
import React, { useState } from 'react';
import { Button, Grid, MenuItem, TextField, Typography, CircularProgress } from '@material-ui/core';
import s from './MainLanding.module.css'
import Tost from './../../img/Landing/Tost.svg'
import Pattern from './../../img/Landing/pattern.png'
import { getPatterns } from '../../services/requests'
import firebase from "firebase/app";
import 'firebase/auth'
import { Link } from 'react-router-dom';

const ChooseLanding = () => {
  const [patterns, setPatterns] = useState(undefined)

  if (!patterns) {
    getPatterns(firebase.auth().currentUser.uid).then((patterns) => {
      console.log(patterns)
      setPatterns(patterns)
    })
  }

  return (
    <Grid item container direction="column" className={s.MainLanding} alignItems="center">
      <Grid item className={s.TostText} >
        <Typography variant="h1">Оберіть шаблон, по якому буде здійснюватися перевірка</Typography>
      </Grid>
      {
        patterns ?
          patterns.map((item) => {
            return (
              <Link to={{
                pathname: '/results',
                state: {
                  data: item
                }
              }} style={{textDecoration: 'none' }}>
                <Grid item container direction="row" justify="center" style={{ marginTop: '30px', marginBottom:'20px' }}>
                  <Grid item>
                    <Typography variant="body1">
                      {item.name}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item className={s.Pattern} >
                  <img src={Pattern} alt="pattern" />
                </Grid>
              </Link>
            )
          })
          :
          <CircularProgress />
      }

    </Grid>
  )

}


export default ChooseLanding;
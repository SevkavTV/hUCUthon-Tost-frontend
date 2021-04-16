import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import s from './MainLanding.module.css'
import Tost from './../../img/Landing/Tost.svg'
import Pattern from './../../img/Landing/pattern.png'
import MyButton from '../../UI/Button/MyButton';

const MainLanding = () => {
  return (
    <Grid item container direction="column" className={s.MainLanding} alignItems="center">
      <Grid item className={s.TostText} >
        <Typography variant="h1">
          <div className={s.imgWrapper}>
            <img src={Tost} alt="Tost" />
          </div>
         - твій помічник в перевірці тестів</Typography>
      </Grid>
      <Grid item style={{ paddingTop: '30px' }}>
        <Typography variant="body1">
          натисни на шаблон тесту:
        </Typography>
      </Grid>
      <Grid item className={s.Pattern}>
        <img src={Pattern} alt="pattern" />
      </Grid>
      <Grid item style={{marginTop:'25px'}}>
        <MyButton name="завантажити" onClick=""></MyButton>
      </Grid>
    </Grid>
  )

}


export default MainLanding;
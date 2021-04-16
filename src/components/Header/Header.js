import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import TostLogo from '../../img/Landing/TostLogo.svg';
import Tost from '../../img/Landing/Tost.svg';
import s from './Header.module.css'
const Header = () => {
  return (
    <Grid item container direction="column" className={s.Header}>
      <Grid item container direction="row" alignItems="center" justify="space-between">
        <Grid item style={{ width: '71px' }}>
          <Typography variant="subtitle1">завантажити</Typography>
        </Grid>
        <Grid item>
          <img src={TostLogo} alt="Tost" />
        </Grid>
        <Grid item style={{ width: '71px' }}>
          <Typography variant="subtitle1">профіль</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="row" justify="center">
        <div className={s.imgWrapper}>
          <img src={Tost} alt="Tost" />
        </div>
      </Grid>
    </Grid>
  )

}


export default Header;
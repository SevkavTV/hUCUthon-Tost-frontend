import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import TostLogo from '../../img/Landing/TostLogo.svg';
import Tost from '../../img/Landing/Tost.svg';
import s from './Header.module.css'
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../services/requests'
import firebase from "firebase/app";
import 'firebase/auth'

const Header = (props) => {
  const [userInfo, setUserInfo] = useState(undefined)

  if (!userInfo) {
    getUserInfo(firebase.auth().currentUser.uid).then((user) => {
      setUserInfo(user)
    })
  }
  return (
    <Grid item container direction="column" className={s.Header}>
      <Grid item container direction="row" alignItems="center" justify="space-between">
        <Link to='/choose_template'>
          <Grid item style={{ width: '71px' }}>
            <Typography variant="subtitle1">перевірити</Typography>
          </Grid>
        </Link>
        <Link to='/'>
          <Grid item>
            <img src={TostLogo} alt="Tost" />
          </Grid>
        </Link>     
        <Grid item style={{ width: '71px' }}>
          <Typography variant="subtitle1">{userInfo ? userInfo.name + ' ' + userInfo.surname : null}</Typography>
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
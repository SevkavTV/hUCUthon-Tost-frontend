import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import TostLogo from '../../img/Landing/TostLogo.svg';
import Tost from '../../img/Landing/Tost.svg';
import s from './Header.module.css'
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../services/requests'
import firebase from "firebase/app";
import 'firebase/auth'
import {signOut} from '../../services/auth'
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

        <Link to='/'>
          <Grid item className={s.imgWrapper}>
            <img src={TostLogo} alt="Tost" />
          </Grid>
        </Link>
        <Grid xs item container direction="row" justify="flex-end">

          <Link to='/choose_template' style={{ textDecoration: 'none' }}>
            <Grid item style={{ marginRight: '10px' }}>
              <Typography variant="subtitle1">перевірити</Typography>
            </Grid>
          </Link>
          <Grid item onClick={signOut} style={{cursor: 'pointer'}}>
              <Typography variant="subtitle1">вийти</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )

}


export default Header;
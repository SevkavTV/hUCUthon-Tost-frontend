import React, { useState } from 'react';
import { Grid, TextField, Button, CircularProgress } from '@material-ui/core';
import { logIn, signOut } from '../../../services/auth'
import { useContext } from 'react'
import { UserContext } from '../../../providers/UserProvider'
import { Redirect } from 'react-router-dom'
import Header from '../../../components/Header/Header';
import logo from '../../../img/Landing/TostLogo.svg'
import s from './Register.module.css'
const Register = () => {
  const user = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    user === undefined ?
      <CircularProgress />
      :
      user === null ?
        <>
          <Grid container direction="column">
            <Grid container direction="row" ><div style={{margin:'15px 0 50px 0'}}><img src={logo} alt="Tost" /></div></Grid>
              <TextField id="standard-basic" label="Email" onChange={(event) => setEmail(event.target.value)} />
              <TextField id="standard-basic" type="password"label="Password" onChange={(event) => setPassword(event.target.value)} />
            <Grid container item direction="row" justify="center" style={{ marginTop: '20px' }}><div className={s.RegButton} onClick={() => logIn(email, password)}>Увійти</div></Grid>
          </Grid>
        </>
        :
        <Redirect to='/' />
  )

}


export default Register;
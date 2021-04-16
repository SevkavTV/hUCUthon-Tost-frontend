import React, { useState } from 'react';
import { Grid, TextField, Button, CircularProgress } from '@material-ui/core';
import { logIn, signOut } from '../../../services/auth'
import { useContext } from 'react'
import { UserContext } from '../../../providers/UserProvider'
import { Redirect } from 'react-router-dom'


const Register = () =>{
  const user = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return(
    user === undefined ?
      <CircularProgress />
      :
      user === null ?
        <div>
          <TextField id="standard-basic" label="Email" onChange={(event) => setEmail(event.target.value)}/>
          <TextField id="standard-basic" label="Password" onChange={(event) => setPassword(event.target.value)}/>
        <Button onClick={() => logIn(email, password)}>Register</Button>
        </div>
        :
        <Redirect to='/' />
  )
  
}


export default Register;
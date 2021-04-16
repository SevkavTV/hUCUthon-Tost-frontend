import { Grid } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header/Header';
import MainLanding from '../../components/MainLanding/MainLanding';
import s from './Landing.module.css'


const Landing = () =>{
  return(
    <Grid container direction="column" className={s.Landing}>
      <Header />
      <MainLanding />
    </Grid>
  )
  
}


export default Landing;
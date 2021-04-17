import { Grid } from '@material-ui/core';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import ChooseLanding from '../../components/ChooseLanding/ChooseLanding';
import s from './Landing.module.css'



const ChooseTemplate = () =>{

  return(
    <Grid container direction="column" className={s.Landing}>
      <Header />
      <ChooseLanding />
    </Grid>
  )
  
}


export default ChooseTemplate;
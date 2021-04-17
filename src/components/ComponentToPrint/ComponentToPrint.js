import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import s from './ComponentToPrint.module.css'

const ComponentToPrint = (props) => {
  let ABC = ['А', 'Б', 'В', 'Г', 'Д']

  return (
    <Grid  ref={props.componentRef} className={s.PrintArea}>
      <Divider style={{ backgroundColor: 'black', width: '350px', margin: '30px auto 0 auto' }} />
      <Grid item container direction="row" justify="center" style={{ marginTop: '10px' }}>
        <Typography variant="body1">{props.nameOfTest}</Typography>
      </Grid>
      <Grid item container direction="column" style={{ marginTop: '30px' }}>
        <Grid item container direction="row" justify="center">
          {Array.apply(null, { length: props.countOfAnswers }).map((elem, index) => {
            return <Grid item container direction="row" justify="flex-end" style={{ width: '42px', margin: '0 5px' }}>{ABC[index]}</Grid>
          })}
        </Grid>
        {Array.apply(null, { length: props.countOfQuestions }).map((elem, indexQuestion) => {
          return <>
            <Grid item container direction="row" alignItems="center" justify="center">
              <Grid item container direction="row" justify="flex-end" style={{ width: '30px' }}>
                <Typography variant="body1">{indexQuestion + 1}</Typography>
              </Grid>
              {Array.apply(null, { length: props.countOfAnswers }).map((elem, indexAnswer) => {
                return <Grid item style={{ margin: '20px 15px', width: '24px', heigth: '24px' }}><label class="container">
                  <input type="checkbox" checked={props.checkBoxes[indexQuestion + 1] ? props.checkBoxes[indexQuestion + 1] === indexAnswer + 1 ? true : false : false} onChange={(event) => props.handleCheckbox(indexQuestion + 1, indexAnswer + 1, event.target.checked)} />
                  <span class="checkmark"></span>
                </label></Grid>
              })}
            </Grid>
          </>
        })}
      </Grid>
    </Grid>
  )
}


export default ComponentToPrint;
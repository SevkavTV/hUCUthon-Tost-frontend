import { Checkbox, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header/Header';



const CheckBoxBuilder = (props) => {
  let countOfQuestions = null
  let countOfAnswers = null
  let nameOfTest = ""
  let ABC = ['А', 'Б', 'В', 'Г', 'Д']
  if (props.location.state) {
    countOfQuestions = props.location.state.questions
    countOfAnswers = props.location.state.answers
    nameOfTest = props.location.state.nameOfTest
  }
  console.log(props.location.state)
  return (
    <Grid container direction="column">
      <Header />
      <Grid item container direction="row" justify="center" style={{ marginTop: '100px' }}>
        <Typography variant="body1">{nameOfTest}</Typography>
      </Grid>
      <Divider style={{ backgroundColor: 'black' }} />
      <Grid item container direction="column">
        <Grid item container direction="row" justify="center">
          {Array.apply(null, { length: countOfAnswers }).map((elem, index) => {
            return <Grid item container direction="row" justify="flex-end" style={{ width: '42px', paddingRight: '5px' }}>{ABC[index]}</Grid>
          })}
        </Grid>
        {Array.apply(null, { length: countOfQuestions }).map((elem, index) => {
          return <>
            <Grid item container direction="row" alignItems="center" justify="center">
              <Grid item container direction="row" justify="flex-end" style={{ width: '23px' }}>
                <Typography variant="body1">{index + 1}</Typography>
              </Grid>
              {Array.apply(null, { length: countOfAnswers }).map(elem => {
                return <Checkbox />
              })}
            </Grid>
          </>
        })}
      </Grid>
    </Grid>

  )
}



export default CheckBoxBuilder
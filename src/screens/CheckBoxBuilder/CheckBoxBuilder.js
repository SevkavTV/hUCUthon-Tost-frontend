import { Checkbox, Divider, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
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

  const [checkBoxes, setCheckBoxes] = useState({})

  const handleCheckbox = (indexQuestion, indexAnswer, checked) => {
    console.log(indexQuestion, indexAnswer, checked)
    let currCheckBoxes = Object.assign({}, checkBoxes);
    if(checked){
      currCheckBoxes[indexQuestion] = indexAnswer
      setCheckBoxes(currCheckBoxes)
    }else{
      delete currCheckBoxes[indexQuestion]
      setCheckBoxes(currCheckBoxes)
    }
  }
  console.log(checkBoxes)
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
        {Array.apply(null, { length: countOfQuestions }).map((elem, indexQuestion) => {
          return <>
            <Grid item container direction="row" alignItems="center" justify="center">
              <Grid item container direction="row" justify="flex-end" style={{ width: '23px' }}>
                <Typography variant="body1">{indexQuestion + 1}</Typography>
              </Grid>
              {Array.apply(null, { length: countOfAnswers }).map((elem, indexAnswer) => {
                return <Checkbox checked={checkBoxes[indexQuestion+1] ? checkBoxes[indexQuestion+1] == indexAnswer+1 ? true : false : false} onChange={(event) => handleCheckbox(indexQuestion+1, indexAnswer+1, event.target.checked)}/>
              })}
            </Grid>
          </>
        })}
      </Grid>
    </Grid>

  )
}



export default CheckBoxBuilder
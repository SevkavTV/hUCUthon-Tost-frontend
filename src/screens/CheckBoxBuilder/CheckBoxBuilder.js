import { Button, Checkbox, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header/Header';
import ReactToPrint from 'react-to-print';
import MyButton from '../../UI/Button/MyButton';
import s from './CheckBoxBuilder.module.css'

const CheckBoxBuilder = (props) => {
  const componentRef = React.useRef();
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
    <Grid container direction="column" >
      <Header />
      <Grid ref={componentRef} className={s.PrintArea}>
        <Divider style={{ backgroundColor: 'black', width:'350px', margin:'100px auto 0 auto'}} />
        <Grid item container direction="row" justify="center" style={{marginTop:'20px'}}>
          <Typography variant="body1">{nameOfTest}</Typography>
        </Grid>
        <Grid item container direction="column" style={{marginTop:'80px'}}>
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
                  return <Checkbox/>
                })}
              </Grid>
            </>
          })}
        </Grid>
      </Grid>
      <ReactToPrint
        trigger={() => <MyButton name="Роздрукувати"></MyButton>}
        content={() => componentRef.current}
      />
    </Grid>

  )
}



export default CheckBoxBuilder
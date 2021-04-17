import { Button, Checkbox, Divider, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ReactToPrint from 'react-to-print';
import MyButton from '../../UI/Button/MyButton';
import s from './CheckBoxBuilder.module.css'
import firebase from "firebase/app";
import 'firebase/auth'
import { createPattern } from '../../services/requests'
 
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

  const saveTest = async() => {
    const uid = firebase.auth().currentUser.uid
    const patternId = (Math.floor(Math.random() * 1000)).toString()

    let answers = []
    for(let property in checkBoxes){
      answers.push({
        "question": parseInt(property),
        "correctAnswer": checkBoxes[property]
      })
    }
    let pattern = {
      "type": 1,
      "data": answers,
      "name": props.location.state.nameOfTest,
      "answersNumber": props.location.state.answers
    }

    const params = {
      "uid": uid,
      "pattern_id": patternId,
      "pattern": pattern
    }

    console.log(params)
    createPattern(params)

  }

  console.log(checkBoxes)
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
      <ReactToPrint
        trigger={() => <MyButton name="Зберегти та роздрукувати"></MyButton>}
        content={() => componentRef.current}
        onAfterPrint={() => saveTest()}
      />
    </Grid>

  )
}



export default CheckBoxBuilder
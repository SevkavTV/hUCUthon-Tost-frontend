import { Button, Checkbox, Divider, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ReactToPrint from 'react-to-print';
import MyButton from '../../UI/Button/MyButton';
import s from './CheckBoxBuilder.module.css'
import ComponentToPrint from '../../components/ComponentToPrint/ComponentToPrint'
import firebase from "firebase/app";
import 'firebase/auth'
import { createPattern } from '../../services/requests'
 
const CheckBoxBuilder = (props) => {
  const componentRef = React.useRef();


  let countOfQuestions = null
  let countOfAnswers = null
  let nameOfTest = ""
  if (props.location.state) {
    countOfQuestions = props.location.state.questions
    countOfAnswers = props.location.state.answers
    nameOfTest = props.location.state.nameOfTest
  }

  const [checkBoxes, setCheckBoxes] = useState({})

  const handleCheckbox = (indexQuestion, indexAnswer, checked) => {
    console.log(indexQuestion, indexAnswer, checked)
    let currCheckBoxes = Object.assign({}, checkBoxes);
    if (checked) {
      currCheckBoxes[indexQuestion] = indexAnswer
      setCheckBoxes(currCheckBoxes)
    } else {
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
      <ComponentToPrint
        componentRef={componentRef}
        handleCheckbox={handleCheckbox}
        countOfAnswers={countOfAnswers}
        nameOfTest={nameOfTest}
        countOfQuestions={countOfQuestions}
        checkBoxes={checkBoxes}
      />
      <Grid item container direction="row" justify="center" style={{marginTop:'25px'}}>

        <ReactToPrint
          trigger={() => <MyButton name="роздрукувати"></MyButton>}
          content={() => componentRef.current}
          onAfterPrint={() => saveTest()}
        />
      </Grid>
    </Grid>

  )
}



export default CheckBoxBuilder
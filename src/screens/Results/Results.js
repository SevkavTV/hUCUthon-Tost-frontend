import { Grid, CircularProgress, Input, Checkbox, Typography, Button } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header/Header';
import FormData from 'form-data'
import firebase from "firebase/app";
import 'firebase/auth'
import { calculateResults } from '../../services/requests'


const Results = (props) => {
    console.log(props.location.state.data)
    let ABC = ['А', 'Б', 'В', 'Г', 'Д']

    let answers = {}
    for (let item of props.location.state.data.data) {
        answers[item['question']] = item['correctAnswer']
    }

    const handleImages = (event) => {
        console.log(event.target.files)
        let files = event.target.files

        let data = new FormData();
        let i = 0;
        Array.from(files).forEach((file) => {
            data.append('photo' + i, file)
            i++;
        })
        data.append('uid', firebase.auth().currentUser.uid);
        data.append('pattern', props.location.state.data);

        calculateResults(data).then((res) => {
            console.log(res)
        })
    }
    return (
        <Grid container direction="column">
            <Header />
            <Grid item container direction="row" justify="center">
                {Array.apply(null, { length: props.location.state.data.answersNumber }).map((elem, index) => {
                    return <Grid item container direction="row" justify="flex-end" style={{ width: '42px', paddingRight: '5px' }}>{ABC[index]}</Grid>
                })}
            </Grid>
            {Array.apply(null, { length: props.location.state.data.data.length }).map((elem, indexQuestion) => {
                return <>
                    <Grid item container direction="row" alignItems="center" justify="center">
                        <Grid item container direction="row" justify="flex-end" style={{ width: '23px' }}>
                            <Typography variant="body1">{indexQuestion + 1}</Typography>
                        </Grid>
                        {Array.apply(null, { length: props.location.state.data.answersNumber }).map((elem, indexAnswer) => {
                            return <Checkbox disabled={true} checked={answers[indexQuestion + 1] === indexAnswer + 1} />
                        })}
                    </Grid>
                </>
            })}
            <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                style={{ display: 'none' }}
                onChange={(event) => handleImages(event)}
            />
            <Grid item container direction="row" justify="center" style={{marginTop:'30px'}}>
                <label htmlFor="contained-button-file"><Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }} component="span">Upload</Button></label>
            </Grid>
        </Grid>
    )

}


export default Results;
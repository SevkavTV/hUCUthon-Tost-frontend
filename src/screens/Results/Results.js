import { Grid, CircularProgress, Input, Checkbox, Typography, Button } from '@material-ui/core';
import React, { useState }from 'react';
import Header from '../../components/Header/Header';
import FormData from 'form-data'
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/storage'
import { calculateResults } from '../../services/requests'


const Results = (props) => {
    const [images, setImages] = useState(undefined)
    let storageRef = firebase.storage().ref();
    let ABC = ['А', 'Б', 'В', 'Г', 'Д']

    let answers = {}
    for (let item of props.location.state.data.data) {
        answers[item['question']] = item['correctAnswer']
    }

    let answersList = []
    for (let item of props.location.state.data.data) {
        answersList.push(item['correctAnswer'] - 1)
    }


    const handleImages = async(event) => {
        console.log(event.target.files)
        let files = event.target.files

        let data = new FormData();
        let i = 0;
        Array.from(files).forEach((file) => {
            data.append('photo' + i, file)
            i++;
        })
        data.append('uid', firebase.auth().currentUser.uid);
        data.append('columns', props.location.state.data.answersNumber);
        data.append('answers', answersList);

        let res = await calculateResults(data)
        let urls = []
        for(let item of res){
            let url = await storageRef.child(item[0]).getDownloadURL();
            urls.push({url, result: item[1]})
        }
        
        setImages(urls)
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
            {
                images ?
                    images.map((item) => {
                        return(
                            <div>
                                <img src={item['url']}/>
                            </div>
                        )
                    })
                    :
                    null
            }
        </Grid>
    )

}


export default Results;
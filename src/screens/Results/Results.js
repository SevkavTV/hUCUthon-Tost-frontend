import { Grid, CircularProgress, Input } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header/Header';
import FormData from 'form-data'
import firebase from "firebase/app";
import 'firebase/auth'
import { calculateResults } from '../../services/requests'


const Results = (props) => {
    console.log(props.location.state.data)
    const handleImages = (event) => {
        console.log(event.target.files)
        let files = event.target.files
        let photos = []
        Array.from(files).forEach((file) => {
            photos.push(file)
        })

        let data = new FormData();
        data.append('photos', photos)
        data.append('uid', firebase.auth().currentUser.uid);
        data.append('pattern', props.location.state.data);

        calculateResults(data).then((res) => {
            console.log(res)
        })
    }
    return (
        <Grid container direction="column">
            <Header />
            <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={(event) => handleImages(event)}
                multiple
            />
        </Grid>
    )

}


export default Results;
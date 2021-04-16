import firebase from "firebase/app";
import 'firebase/auth'


export const logIn = async (email, password) => {
    console.log(email, password)
    await firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        console.log('user created!')
    }).catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
            firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                console.log('user logged in!')
            })
        }
    })
}


export const signOut = async () => {
    await firebase.auth().signOut().then(() => {
        console.log('user logged out')
    });
}
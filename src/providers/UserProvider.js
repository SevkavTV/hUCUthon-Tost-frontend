import React, { Component, createContext } from "react";
import firebase from "firebase/app";
import 'firebase/auth'

export const UserContext = createContext({ user: undefined });

class UserProvider extends Component {
    state = {
        user: undefined
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(userAuth => {
            console.log(userAuth)
            this.setState({ user: userAuth });
        });
    };
    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
export default UserProvider;

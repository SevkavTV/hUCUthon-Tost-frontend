import { Route } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './providers/UserProvider'
import { Redirect } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'



const PrivateRoute = (props) => {

    const user = useContext(UserContext)
    return(
        user === undefined ?
            <CircularProgress />
            :
            user === null ?
                <Redirect to='/login' />                
                :
                <Route {...props} />
    )
}

export default PrivateRoute
import './App.css';
import Landing from './screens/Landing/Landing';
import Register from './screens/Landing/Register/Register';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'


function App() {
  return (
    <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={Landing} />
          <Route exact path="/login" component={Register} />
        </Switch>
    </div>
  );
}

export default App;

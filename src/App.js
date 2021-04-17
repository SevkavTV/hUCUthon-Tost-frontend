import './App.css';
import Landing from './screens/Landing/Landing';
import Register from './screens/Landing/Register/Register';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import CheckBoxBuilder from './screens/CheckBoxBuilder/CheckBoxBuilder';
import ChooseTemplate from './screens/ChooseTemplate/ChooseTemplate'
import Results from './screens/Results/Results'


function App() {
  return (
    <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={Landing} />
          <PrivateRoute exact path="/template" component={CheckBoxBuilder} />
          <PrivateRoute exact path="/choose_template" component={ChooseTemplate} />
          <PrivateRoute exact path="/results" component={Results} />
          <Route exact path="/login" component={Register} />
        </Switch>
    </div>
  );
}

export default App;

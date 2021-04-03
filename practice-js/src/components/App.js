import { Route, Switch, Link } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Random from './Random';
import ButtonToAPI from './ButtonToAPI';

function App() {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/random'}>Random</Link>
      <Link to={'/buttontoapi'}>Button To API</Link>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/random" render={() => <Random name={'Rose'} />} />
        <Route exact path="/buttontoapi" render={() => <ButtonToAPI />} />
      </Switch>
    </div>

  );
}

export default App;

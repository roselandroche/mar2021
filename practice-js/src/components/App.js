import { Route, Switch, Link } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Random from './Random';
import Quote from './Quote';
import AddToFeed from './AddToFeed';

function App() {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/random'}>Random</Link>
      <Link to={'/quote'}>Quote</Link>
      <Link to={'/addtofeed'}>Add to Feed</Link>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/random" render={() => <Random name={'Rose'} />} />
        <Route exact path="/quote" render={() => <Quote />} />
        <Route exact path="/addtofeed" render={() => <AddToFeed /> } />
      </Switch>
    </div>

  );
}

export default App;

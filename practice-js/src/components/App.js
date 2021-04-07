import { React, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Random from './Random';
import Quote from './Quote';
import DisplayFeed from './DisplayFeed';

function App() {
  const [feed, getFeed] = useState([]);
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/random'}>Random</Link>
      <Link to={'/quote'}>Quote</Link>
      <Link to={'/displayfeed'}>Display Feed</Link>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/random" render={() => <Random name={'Rose'} />} />
        <Route exact path="/quote" render={() => <Quote />} />
        <Route exact path="/displayfeed" render={() => <DisplayFeed feed={feed} getFeed={ getFeed } /> } />
      </Switch>
    </div>

  );
}

export default App;

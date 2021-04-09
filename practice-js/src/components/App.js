import { React, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Nav from './Nav';
import Random from './Random';
import Quote from './Quote';
import DisplayFeed from './DisplayFeed';

function App() {
  const [feed, getFeed] = useState([]);
  return (
    <div>
      <Nav />
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

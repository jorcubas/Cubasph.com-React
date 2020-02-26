import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/header/header.component.jsx';

import aboutPage from './pages/about/about.component';
import HomePage from './pages/home/home.component';

class App extends React.Component {

  render() {
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={aboutPage} />
        </Switch>
      </div>        
    )
  }
}


export default App;
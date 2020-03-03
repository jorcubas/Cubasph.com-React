import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/header/header.component.jsx';

import aboutPage from './pages/about/about.component';
import HomePage from './pages/home/home.component';
import SignIn from './pages/sign-in/sign-in.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else{
        this.setState({ currentUser: userAuth });
      }      
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  

  render() {
    return(
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={aboutPage} />
          <Route exact path='/signin' component={SignIn} />
        </Switch>
      </div>        
    )
  }
}


export default App;
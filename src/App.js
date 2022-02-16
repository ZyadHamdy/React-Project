import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Contact from './components/Contact/contact';
import Nav from './components/Navbar/navbar';
import Index from './components/Index/index';

class App extends Component {

  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Nav />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
      </React.Fragment>
     );
  }
}
 
export default App;
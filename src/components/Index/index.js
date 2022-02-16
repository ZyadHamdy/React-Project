import React, { Component } from 'react';
import About from '../About/about';
import Home from '../Home/home';
import Work from '../Work/work';
import Portfolio from './../Portfolio/portfolio';
import SocialMedia from './../SocialMedia/socialmesia';
import Footer from '../Footer/footer';
import Profile from '../Profile/profile';

class Index extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Home />
                <Work />
                <Portfolio />
                <Profile />
                <About />
                <SocialMedia />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Index;

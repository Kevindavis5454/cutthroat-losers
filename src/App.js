import React from 'react';
import { Route } from "react-router-dom";
import Error from "./Error"
import Header from "./Header/Header";
import PersonalPage from "./PersonalPage/PersonalPage";
import "./App.css";
import HeaderLogin from "./LandingPage/HeaderLogin";
import Home from "./LandingPage/Home";
import About from "./LandingPage/About";
import HowToUse from "./LandingPage/HowToUse";
import Rules from "./LandingPage/Rules";
import WeightTracking from './WeightTracking/WeightTracking';

class App extends React.Component {

    state = {};

    render() {

        return (
            <div className='main-div'>
                <div className='header-div'>
                    <Route exact path='/' component={HeaderLogin} />
                    <Route path='/personal' component={Header}/>
                    <Route path='/about' component={HeaderLogin} />
                    <Route path='/howtouse' component={HeaderLogin} />
                    <Route path='/rules' component={HeaderLogin} />
                </div>
                <div className='content-div'>
                    <Route exact path='/' component={Home} />
                    <Route path='/personal' component={PersonalPage} />
                    <Route path='/about' component={About} />
                    <Route path='/howtouse' component={HowToUse} />
                    <Route path='/rules' component={Rules} />

                </div>
            </div>
        );
    }
}

export default App;

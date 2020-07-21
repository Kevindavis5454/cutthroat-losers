import React from 'react';
import {Link, Route} from "react-router-dom";
import Error from "./Error"
import Header from "./Header/Header";
import PersonalPage from "./PersonalPage/PersonalPage";
import "./main.css"
import HeaderLogin from "./Header/HeaderLogin";
import GroupPage from "./GroupPage/GroupPage";
import BingoGame from "./Bingo/BingoGame";
import Footer from "./Footer/Footer";
import LandingPage from "./LandingPage/LandingPage";
import Admin from "./Admin/Admin";
import config from "./config";
import ApiContext from "./ApiContext";

class App extends React.Component {

    state = {
        weights: [],
        workouts: [],
        sabotages: [],
        points: [],
        measurements: [],

    };

    render() {

        const {
            weights,
            workouts,
            sabotages,
            points,
            measurements,} = this.state;

        const value = {
            weights: this.state.weights,
            workouts: this.state.workouts,
            sabotages: this.state.sabotages,
            points: this.state.points,
            measurements: this.state.measurements,
        };

        return (
            <ApiContext.Provider value={value}>
            <div className='main-div'>
                <div className='header-div'>
                    <Route exact path='/' component={HeaderLogin} />
                    <Route path='/landing' component={HeaderLogin} />
                    <Route path='/personal' component={Header}/>
                    <Route path='/group' component={Header} />
                    <Route path='/bingo' component={Header} />
                    <Route path='/admin' component={Header} />
                </div>
                <div className='content-div'>
                    <Route exact path='/'
                           render={routeProps => (
                               <LandingPage
                                   {...this.props}
                                   {...routeProps}
                                   />
                           )}
                    />
                    <Route path='/landing'
                           render={routeProps => (
                               <LandingPage
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                    <Route path='/personal'
                           render={routeProps => (
                               <PersonalPage
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                    <Route path='/group'
                           render={routeProps => (
                               <GroupPage
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                    <Route path='/bingo'
                           render={routeProps => (
                               <BingoGame
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                    <Route path='/admin'
                           render={routeProps => (
                               <Admin
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                </div>
                <div className='footer-div'>
                    <Route path='/' component={Footer} />
                </div>
            </div>
            </ApiContext.Provider>
        );
    }
}

export default App;

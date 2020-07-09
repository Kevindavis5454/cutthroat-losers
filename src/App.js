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

class App extends React.Component {

    state = {};

    render() {

        return (
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
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/landing' component={LandingPage} />
                    <Route path='/personal' component={PersonalPage} />
                    <Route path='/group' component={GroupPage} />
                    <Route path='/bingo' component={BingoGame} />
                    <Route path='/admin' component={Admin} />


                </div>
                <div className='footer-div'>
                    <Route path='/' component={Footer} />
                </div>
            </div>
        );
    }
}

export default App;

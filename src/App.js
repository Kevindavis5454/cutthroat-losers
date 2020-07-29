import React from 'react';
import { Route} from "react-router-dom";
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
import ApiContext from "./ApiContext";

class App extends React.Component {

    state = {
        newContestStartDate: new Date(),
        newContestEndDate: new Date(),
        userContests: ["New Year New You", "Family Losers"],
        userName: "Kevin Davis",
        user_id: ""

    };

    setNewContestStartDate = (date) => {
        this.setState({
            newContestStartDate: date
        })
    }
    setNewContestEndDate = (date) => {
        this.setState({
            newContestEndDate: date
        })
    }
    setUser = (userName, user_id) => {
        this.setState({
            userName: userName,
            user_id: user_id
        })
    }
    setContests = (contests) => {
        this.setState({
            userContests: contests
        })
    }

    render() {

        const value = {
            newContestStartDate: this.state.newContestStartDate,
            newContestEndDate: this.state.newContestEndDate,
            userContests: this.state.userContests,
            userName: this.state.userName,
            user_id: this.state.user_id,
            handleSetNewContestStartDate: this.setNewContestStartDate,
            handleSetNewContestEndDate: this.setNewContestEndDate,
            handleSetUser: this.setUser,
            handleSetContests: this.setContests


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

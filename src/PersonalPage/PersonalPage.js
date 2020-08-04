import React from "react";
import { Route } from 'react-router-dom'
import WeightTracking from "../WeightTracking/WeightTracking";
import PersonalPageHome from "./PersonalPageHome";
import WorkoutTracking from "../WorkoutTracking/WorkoutTracking";
import PersonalSabotages from "../PersonalSabotages/PersonalSabotages";
import Points from "../Points/Points";
import Contact from "../ContactPage/Contact";
import Home from "../Home/Home";
import Sidebar from "../SideBar/Sidebar";
import Rules from "../LandingPage/Rules";
import config from "../config";
import ApiContext from "../ApiContext";

class PersonalPage extends React.Component {

    static contextType = ApiContext;

    componentDidMount() {

        console.log("personal page mounted -- did mount")
    }

    render() {

        return (
            <>
                <div className='personal-sidebar'>
                <Route path='/personal'
                       render={routeProps => (
                           <Sidebar
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                </div>
                <div className='personal-content'>
                <Route exact path='/personal'
                       render={routeProps => (
                           <PersonalPageHome
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/weighttracker'
                       render={routeProps => (
                           <WeightTracking
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/workouttracker'
                       render={routeProps => (
                           <WorkoutTracking
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/sabotages'
                       render={routeProps => (
                           <PersonalSabotages
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/points'
                       render={routeProps => (
                           <Points
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/contact' component={Contact} />
                <Route path='/personal/home'
                       render={routeProps => (
                           <Home
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/rules' component={Rules} />
                </div>
            </>
        )

    }
}

export default PersonalPage


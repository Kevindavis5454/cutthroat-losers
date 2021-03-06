import React from "react";
import { Route } from 'react-router-dom'
import WeightTracking from "../WeightTracking/WeightTracking";
import PersonalPageHome from "./PersonalPageHome";
import WorkoutTracking from "../WorkoutTracking/WorkoutTracking";
import Points from "../Points/Points";
import Contact from "../ContactPage/Contact";
import Home from "../Home/Home";
import Sidebar from "../SideBar/Sidebar";
import Rules from "../LandingPage/Rules";
import Measurements from "../Measurements/Measurements";

class PersonalPage extends React.Component {


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
                <Route path='/personal/measurements'
                       render={routeProps => (
                           <Measurements
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


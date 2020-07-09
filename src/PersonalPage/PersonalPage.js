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

class PersonalPage extends React.Component {

    render() {
        return (
            <>
                <div className='personal-sidebar'>
                <Route path='/personal' component={Sidebar} />
                </div>
                <div className='personal-content'>
                <Route exact path='/personal' component={PersonalPageHome} />
                <Route path='/personal/weighttracker' component={WeightTracking} />
                <Route path='/personal/workouttracker' component={WorkoutTracking} />
                <Route path='/personal/sabotages' component={PersonalSabotages} />
                <Route path='/personal/points' component={Points} />
                <Route path='/personal/contact' component={Contact} />
                <Route path='/personal/home' component={Home} />
                <Route path='/personal/rules' component={Rules} />
                </div>
            </>
        )

    }
}

export default PersonalPage


import React from "react";
import "./personalpage.css"
import {Link} from "react-router-dom";
import { Route } from 'react-router-dom'
import WeightTracking from "../WeightTracking/WeightTracking";
import PersonalPageHome from "./PersonalPageHome";
import WorkoutTracking from "../WorkoutTracking/WorkoutTracking";
import PersonalSabotages from "../PersonalSabotages/PersonalSabotages";
import Points from "../Points/Points";
import Bingo from "../Bingo/Bingo";
import Chat from "../Chat/Chat";

class PersonalPage extends React.Component {

    render() {
        return (
            <>
                <div className='personal-menu'>
                    <div className='image-cropper'>
                        <img src={require('./KevinProfile.JPG')} alt='Profile Picture' className='profile-pic'></img>
                    </div>
                    <h3>Kevin Davis</h3>
                    <h4>Current Weight: 246lbs</h4>
                    <h4>Goal Weight: 190lbs</h4>
                </div>
                <hr></hr>
                <div className='personal-content'>
                <Route exact path='/personal' component={PersonalPageHome} />
                <Route path='/personal/weighttracker' component={WeightTracking} />
                <Route path='/personal/workouttracker' component={WorkoutTracking} />
                <Route path='/personal/sabotages' component={PersonalSabotages} />
                <Route path='/personal/points' component={Points} />
                <Route path='/personal/bingo' component={Bingo} />
                <Route path='/personal/chat' component={Chat} />
                </div>
            </>
        )

    }
}

export default PersonalPage


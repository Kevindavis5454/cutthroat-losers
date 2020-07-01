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
import BingoGame from "../Bingo/BingoGame";
import Contact from "../ContactPage/Contact";
import Infograph from "../Infograph/infograph";

class PersonalPage extends React.Component {

    render() {
        return (
            <>
                <div className='personal-menu'>
                    <div className='circular--portrait'>
                        <img src={require('./KevinProfile.JPG')} alt='Profile Picture' className='profile-pic'></img>
                    </div>
                    <div className='infograph-div'>
                    <Infograph />
                    </div>
                </div>
                <hr className='personal-divide'></hr>
                <div className='personal-content'>
                <Route exact path='/personal' component={PersonalPageHome} />
                <Route path='/personal/weighttracker' component={WeightTracking} />
                <Route path='/personal/workouttracker' component={WorkoutTracking} />
                <Route path='/personal/sabotages' component={PersonalSabotages} />
                <Route path='/personal/points' component={Points} />
                <Route path='/personal/bingo' component={BingoGame} />
                <Route path='/personal/chat' component={Chat} />
                <Route path='/personal/contact' component={Contact} />
                <Route path='/personal/home' component={Infograph} />
                </div>
            </>
        )

    }
}

export default PersonalPage


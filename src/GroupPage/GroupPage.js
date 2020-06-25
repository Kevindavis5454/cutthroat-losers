import React from "react";
import "./grouppage.css"
import { Route } from "react-router-dom"
import GroupPageHome from "./GroupPageHome";
import GroupWeightTracking from "../GroupWeightTracking/GroupWeightTracking";
import GroupWorkoutTracking from "../GroupWorkoutTracking/GroupWorkoutTracking";
import Bingo from "../Bingo/Bingo";
import Chat from "../Chat/Chat";
import BingoGame from "../Bingo/BingoGame";
import GroupSabotages from "../GroupSabotages/GroupSabotages";
import GroupPoints from "../GroupPoints/GroupPoints";

class GroupPage extends React.Component {

    render () {
        return (
            <>
                <div className='personal-menu'>
                    <div className='circular--portrait'>
                        <img src="" alt='Profile Picture' className='profile-pic'></img>
                    </div>
                    <h3>Group Name</h3>
                    <h4>Members Playing:</h4>
                    <h3>Kevin Davis</h3>
                    <h3>Catherine Davis</h3>
                </div>
                <hr></hr>
                <div className='personal-content'>
                    <Route exact path='/group' component={GroupPageHome} />
                    <Route path='/group/weighttracker' component={GroupWeightTracking} />
                    <Route path='/group/workouttracker' component={GroupWorkoutTracking} />
                    <Route path='/group/sabotages' component={GroupSabotages} />
                    <Route path='/group/points' component={GroupPoints}/>
                    <Route path='/group/bingo' component={BingoGame} />
                    <Route path='/group/chat' component={Chat} />
                </div>
            </>
        )
    }
}

export default GroupPage
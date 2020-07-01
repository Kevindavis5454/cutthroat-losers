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
import Memberlist from '../MemberList/Memberlist'

class GroupPage extends React.Component {

    render () {
        return (
            <>
                <div className='personal-menu'>
                    <div className='circular--portrait'>
                        <img src={require("../Header/LogoMakr_37X4P2.png")} alt='Logo' className='profile-pic'></img>
                    </div>
                    <Memberlist/>
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
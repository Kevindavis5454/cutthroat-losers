import React from "react";
import { Route } from "react-router-dom"
import GroupPageHome from "./GroupPageHome";
import GroupWeightTracking from "../GroupWeightTracking/GroupWeightTracking";
import GroupWorkoutTracking from "../GroupWorkoutTracking/GroupWorkoutTracking";
import GroupSabotages from "../GroupSabotages/GroupSabotages";
import GroupPoints from "../GroupPoints/GroupPoints";
import Sidebar from "../SideBar/Sidebar";

class GroupPage extends React.Component {

    render () {
        return (
            <>
                <div className='personal-sidebar'>
                    <Route path='/group' component={Sidebar} />
                </div>
                <div className='personal-content'>
                        <Route exact path='/group' component={GroupPageHome} />
                        <Route path='/group/weighttracker' component={GroupWeightTracking} />
                        <Route path='/group/workouttracker' component={GroupWorkoutTracking} />
                        <Route path='/group/sabotages' component={GroupSabotages} />
                        <Route path='/group/points' component={GroupPoints}/>
                </div>
                
            </>
        )
    }
}

export default GroupPage
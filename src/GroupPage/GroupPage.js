import React from "react";
import { Route, BrowserRouter } from "react-router-dom"
import GroupPageHome from "./GroupPageHome";
import GroupWeightTracking from "../GroupWeightTracking/GroupWeightTracking";
import GroupWorkoutTracking from "../GroupWorkoutTracking/GroupWorkoutTracking";
import GroupSabotages from "../GroupSabotages/GroupSabotages";
import GroupPoints from "../GroupPoints/GroupPoints";
import Sidebar from "../SideBar/Sidebar";
import GroupMeasurements from "../GroupMeasurements/GroupMeasurements";

class GroupPage extends React.Component {

    render () {
        return (
            <>
                <div className='personal-sidebar'>
                    <Route path='/group'
                           render={routeProps => (
                               <Sidebar
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                </div>
                <div className='personal-content'>
                        <Route exact path='/group'
                               render={routeProps => (
                                   <GroupPageHome
                                       {...this.props}
                                       {...routeProps}
                                   />
                               )}
                        />
                        <Route path='/group/weighttracker'
                               render={routeProps => (
                                   <GroupWeightTracking
                                       {...this.props}
                                       {...routeProps}
                                   />
                               )}
                        />
                        <Route path='/group/workouttracker'
                               render={routeProps => (
                                   <GroupWorkoutTracking
                                       {...this.props}
                                       {...routeProps}
                                   />
                               )}
                        />
                        <Route path='/group/measurements'
                               render={routeProps => (
                                   <GroupMeasurements
                                       {...this.props}
                                       {...routeProps}
                                   />
                               )}
                        />
                        <Route path='/group/points'
                               render={routeProps => (
                                   <GroupPoints
                                       {...this.props}
                                       {...routeProps}
                                   />
                               )}
                        />
                </div>
            </>
        )
    }
}

export default GroupPage
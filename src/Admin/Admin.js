import React from "react";
import "./admin.css"
import Sidebar from "../SideBar/Sidebar";
import { Route } from 'react-router-dom'
import GroupWorkoutTracking from "../GroupWorkoutTracking/GroupWorkoutTracking";
import GroupWeightTracking from "../GroupWeightTracking/GroupWeightTracking";

class Admin extends React.Component {

    render () {

        return (
            <>
                <div className='personal-sidebar'>
                    <Route path='/admin' component={Sidebar} />
                </div>
                <div className='personal-content'>
            <div className='admin-main-div'>
                <h3>Admin</h3>
                <div className="flex-container">
                    <div className="flex-cell">
                        <div className="flex-item">
                            <div className='calculate'>
                                <h3>Calculate Weight Points</h3>
                                <button className='glow-on-hover'>Calculate</button>
                                <GroupWeightTracking/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <div className='calculate'>
                                <h3>Calculate Measurement Points</h3>
                                <button className='glow-on-hover'>Calculate</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <div className='calculate'>
                                <h3>Calculate Workout Points</h3>
                                <button className='glow-on-hover'>Calculate</button>
                                <GroupWorkoutTracking/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <div className='calculate'>
                                <h3>Future Feature</h3>
                                <button className='glow-on-hover'>Calculate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                </>
        )
    }
}

export default Admin
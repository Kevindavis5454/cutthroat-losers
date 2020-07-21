import React from "react";
import {Link, Route} from "react-router-dom";
import GroupWeightTracking from "../GroupWeightTracking/GroupWeightTracking";
import GroupWorkoutTracking from "../GroupWorkoutTracking/GroupWorkoutTracking";
import GroupSabotages from "../GroupSabotages/GroupSabotages";
import GroupPoints from "../GroupPoints/GroupPoints";

class GroupPageHome extends React.Component {

    render () {

        return (
            <>
                <div className="flex-container">
                    <div className="flex-cell">
                        <Link className="flex-item" to='/group/weighttracker'>
                            <div>
                                <GroupWeightTracking />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/group/workouttracker'>
                            <div>
                                <GroupWorkoutTracking />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/group/sabotages'>
                            <div>
                                <GroupSabotages />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/group/points'>
                            <div>
                                <GroupPoints />
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default GroupPageHome
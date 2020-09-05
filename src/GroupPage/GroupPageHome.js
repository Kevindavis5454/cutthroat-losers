import React from "react";
import {Link} from "react-router-dom";
import GroupWeightTracking from "../GroupWeightTracking/GroupWeightTracking";
import GroupWorkoutTracking from "../GroupWorkoutTracking/GroupWorkoutTracking";
import GroupPoints from "../GroupPoints/GroupPoints";
import GroupMeasurements from "../GroupMeasurements/GroupMeasurements";

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
                        <Link className="flex-item" to='/group/measurements'>
                            <div>
                                <GroupMeasurements />
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
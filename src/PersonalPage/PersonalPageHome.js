import React from "react";
import {Link} from "react-router-dom";
import WeightTracking from "../WeightTracking/WeightTracking";
import WorkoutTracking from "../WorkoutTracking/WorkoutTracking";
import Points from "../Points/Points";
import Measurements from "../Measurements/Measurements";


class PersonalPageHome extends React.Component {

    render () {

        return (
            <>
                <div className="flex-container">
                    <div className="flex-cell">
                        <Link className="flex-item" to='/personal/weighttracker'>
                            <div>
                                <WeightTracking />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/personal/workouttracker'>
                            <div>
                                <WorkoutTracking />
                            </div>
                        </Link>

                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/personal/sabotages'>
                            <div>
                                <Measurements />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/personal/points'>
                            <div>
                                <Points />
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default PersonalPageHome
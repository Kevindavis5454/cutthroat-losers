import React from "react";
import {Link, BrowserRouter} from "react-router-dom";
import WeightTracking from "../WeightTracking/WeightTracking";
import WorkoutTracking from "../WorkoutTracking/WorkoutTracking";
import Points from "../Points/Points";
import Measurements from "../Measurements/Measurements";


class PersonalPageHome extends React.Component {

    render () {

        return (
            <>
            <BrowserRouter>
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
                        <Link className="flex-item" to='/personal/measurements'>
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
                </BrowserRouter>
            </>
        )
    }
}

export default PersonalPageHome
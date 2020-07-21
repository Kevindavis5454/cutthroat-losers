import React from "react";
import {Link} from "react-router-dom";
import WeightTracking from "../WeightTracking/WeightTracking";
import { Route } from "react-router-dom";
import WorkoutTracking from "../WorkoutTracking/WorkoutTracking";
import PersonalSabotages from "../PersonalSabotages/PersonalSabotages";
import Points from "../Points/Points";


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
                                <PersonalSabotages />
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
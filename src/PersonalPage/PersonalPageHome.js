import React from "react";
import "./personalpage.css"
import {Link} from "react-router-dom";
import WeightTracking from "../WeightTracking/WeightTracking";
import { Route } from "react-router-dom";
import WorkoutTracking from "../WorkoutTracking/WorkoutTracking";
import PersonalSabotages from "../PersonalSabotages/PersonalSabotages";
import Points from "../Points/Points";
import Bingo from "../Bingo/Bingo";
import Chat from "../Chat/Chat";


class PersonalPageHome extends React.Component {

    render () {

        return (
            <>
                <div className="flex-container">
                    <div className="flex-cell">
                        <div className="flex-item">
                                <Route path='/personal' component={WeightTracking} />
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <Route path='/personal' component={WorkoutTracking} />
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <Route path='/personal' component={PersonalSabotages} />
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <Route path='/personal' component={Points} />
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <Route path='/personal' component={Bingo} />
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <Route path='/personal' component={Chat} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PersonalPageHome
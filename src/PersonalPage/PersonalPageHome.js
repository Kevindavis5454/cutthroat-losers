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
import BingoGame from "../Bingo/BingoGame";


class PersonalPageHome extends React.Component {

    render () {

        return (
            <>
                <div className="flex-container">
                    <div className="flex-cell">
                        <Link className="flex-item" to='/personal/weighttracker'>
                            <div>
                                <Route path='/personal' component={WeightTracking} />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/personal/workouttracker'>
                            <div>
                                <Route path='/personal' component={WorkoutTracking} />
                            </div>
                        </Link>

                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/personal/sabotages'>
                            <div>
                                <Route path='/personal' component={PersonalSabotages} />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/personal/points'>
                            <div>
                                <Route path='/personal' component={Points} />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/personal/bingo'>
                            <div>
                                <Route path='/personal' component={BingoGame} />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/personal/chat'>
                            <div>
                                <Route path='/personal' component={Chat} />
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default PersonalPageHome
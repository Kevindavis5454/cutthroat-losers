import React from "react";
import "./grouppage.css";
import {Link, Route} from "react-router-dom";
import Chat from "../Chat/Chat";
import GroupWeightTracking from "../GroupWeightTracking/GroupWeightTracking";
import GroupWorkoutTracking from "../GroupWorkoutTracking/GroupWorkoutTracking";
import BingoGame from "../Bingo/BingoGame";
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
                                <Route path='/group' component={GroupWeightTracking} />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/group/workouttracker'>
                            <div>
                                <Route path='/group' component={GroupWorkoutTracking} />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/group/sabotages'>
                            <div>
                                <Route path='/group' component={GroupSabotages} />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/group/points'>
                            <div>
                                <Route path='/group' component={GroupPoints} />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/group/bingo'>
                            <div>
                                <Route path='/group' component={BingoGame} />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-cell">
                        <Link className="flex-item" to='/group/chat'>
                            <div>
                                <Route path='/group' component={Chat}/>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default GroupPageHome
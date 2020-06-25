import React from "react";
import "./grouppage.css";
import { Route } from "react-router-dom";
import Bingo from "../Bingo/Bingo";
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
                        <div className="flex-item">
                            <Route path='/group' component={GroupWeightTracking} />
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <Route path='/group' component={GroupWorkoutTracking} />
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <Route path='/group' component={GroupSabotages} />
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <Route path='/group' component={GroupPoints} />
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <Route path='/group' component={BingoGame} />
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <Route path='/group' component={Chat}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default GroupPageHome
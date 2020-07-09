import React from "react";
import "./grouppoints.css"

class GroupPoints extends React.Component {

    render () {

        return (
            <div className='group-points-div'>
                <h3>Current Group Points</h3>
            <div className="flex-container-workout">
                <div className="flex-cell-workout">
                    <div className="flex-item-workout">
                        Kevin
                        Current Points:
                        <span className='points-current player1'>49</span>
                    </div>
                </div>
                <div className="flex-cell-workout">
                    <div className="flex-item-workout">
                        Bork Bork
                        Current Points:
                        <span className='points-current player2'>44</span>
                    </div>
                </div>
                <div className="flex-cell-workout">
                    <div className="flex-item-workout">
                        Woof Woof
                        Current Points:
                        <span className='points-current player3'>27</span>
                    </div>
                </div>
                <div className="flex-cell-workout">
                    <div className="flex-item-workout">
                        Moon Moon
                        Current Points:
                        <span className='points-current player4'>28</span>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default GroupPoints
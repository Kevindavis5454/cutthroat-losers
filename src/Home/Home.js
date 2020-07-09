import React from "react";
import './home.css'
import ProgressChart from '../ProgressChart/ProgressChart'
import GroupGraph from "../GroupGraph/GroupGraph";

class Home extends React.Component {

    render () {
        return (
            <div className="home-container">
                <div className="flex-container">
                    <div className="flex-cell">
                        <div className="flex-item">
                            <div className="flex-container-workout">
                                <div className='flex-cell-workout admin-cell'>
                                    <div className='flex-item-workout'>
                                        <div className="home-progress-div">
                                            <ProgressChart/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <div className="flex-container-workout">
                                <div className='flex-cell-workout admin-cell'>
                                    <div className='flex-item-workout'>
                                        <div className="home-graph-div">
                                            <GroupGraph />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='player-labels'>
                                <h3>Group Points Acquired</h3>
                                <ul>
                                    <span className='player1'><li>Kevin</li></span>
                                    <span className='player2'><li>Bork Bork</li></span>
                                    <span className='player3'><li>Woof Woof</li></span>
                                    <span className='player4'><li>Moon Moon</li></span>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <h3>More stuff</h3>
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <h3>More More Stuff</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
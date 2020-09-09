import React from "react";
import './home.css'
import ProgressChart from '../ProgressChart/ProgressChart'
import GroupGraph from "../GroupGraph/GroupGraph";

class Home extends React.Component {

    render () {

        return (
            <div className="home-container">
                <div className="flex-container home-page">
                    <div className="flex-cell homepage-cell">
                        <div className="flex-item">
                            <ProgressChart/>
                        </div>
                    </div>
                    <div className="flex-cell homepage-cell">
                        <div className="flex-item">
                            <GroupGraph />
                        </div>
                    </div>
                    <div className="flex-cell homepage-cell">
                        <div className="flex-item">
                            <h3>Future Feature</h3>
                        </div>
                    </div>
                    <div className="flex-cell homepage-cell">
                        <div className="flex-item">
                            <h3>Future Feature</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
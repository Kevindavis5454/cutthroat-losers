import React from "react";
import "./points.css"
import { Link } from "react-router-dom";

class Points extends React.Component {

    render () {

        return (
            <div className="points-box-div">
                <h1>Current Points</h1>
                <p>Your remaining point balance is: 31</p>
            </div>
        )
    }
}

export default Points
import React from "react";
import "./points.css"
import { Link } from "react-router-dom";

class Points extends React.Component {

    render () {

        return (
            <Link to='/personal/points'>
            <div>
                <h1>Current Points: 31</h1>
            </div>
            </Link>

        )
    }
}

export default Points
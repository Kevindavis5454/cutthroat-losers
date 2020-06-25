import React from "react";
import "./personalsabotages.css"
import { Link } from "react-router-dom";

class PersonalSabotages extends React.Component {

    render () {
        return (
            <Link to='/personal/sabotages'>
            <div>
                <h1>Current Sabotages:</h1>
            </div>
            </Link>
        )
    }
}

export default PersonalSabotages
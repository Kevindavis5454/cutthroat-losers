import React from "react";
import "./personalsabotages.css"
import { Link } from "react-router-dom";

class PersonalSabotages extends React.Component {

    render () {
        return (
            <div className='current-sabo-box'>
                <h1>Current Sabotages</h1>
                <p>You have these sabotages currently applied to you:</p>
            </div>
        )
    }
}

export default PersonalSabotages
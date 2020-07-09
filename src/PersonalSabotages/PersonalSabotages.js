import React from "react";
import "./personalsabotages.css"
import { Link } from "react-router-dom";

class PersonalSabotages extends React.Component {

    render () {
        return (
            <div className='current-sabo-box'>
                <h3 className='player1'>Kevin's Sabotages</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout personal-sabotages'>
                        <div className='flex-item-workout'>
                            <span className='sabotages'>Must eat chinese food once a day for a week</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalSabotages
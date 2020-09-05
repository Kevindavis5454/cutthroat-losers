import React from "react";
import './landingPage.css';

class Rules extends React.Component {

    render () {
        return (
            <div className='landing-div'>
                <h1>Rules</h1>
                <p>Weigh-in day is Friday before Noon.
                    You can get points from: Weight loss, Stomach inches loss, and Workouts
                </p>
                <h3>Weight</h3>
                <ul className='rules'>
                    <li>1st Place points for the week - 7 points</li>
                    <li>2nd Place points for the week- 5 points</li>
                    <li>3rd Place points for the week- 3 points</li>
                    <li>4th Place points for the week - 1 point</li>
                </ul>
                <br></br>
                <h3>Stomach</h3>
                <ul className='rules'>
                    <li>1st Place points for the week - 7 points</li>
                    <li>2nd Place points for the week- 5 points</li>
                    <li>3rd Place points for the week- 3 points</li>
                    <li>4th Place points for the week - 1 point</li>
                </ul>
                <br></br>
                <h3>Workouts</h3>
                <ul className='rules'>
                    <li>1 point per each Strength Workout</li>
                    <li>1 point per each Cardio Workout</li>
                </ul>
            </div>
        )
    }
}

export default Rules
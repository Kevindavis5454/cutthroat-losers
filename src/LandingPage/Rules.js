import React from "react";
import './landingPage.css';

class Rules extends React.Component {

    render () {
        return (
            <div className='landing-div'>
                <h1>Rules</h1>
                <p>Weigh-in day is Friday before Noon.
                    You can get points from: Weight loss, Stomach inches loss, Workouts, and Bingo.
                </p>
                <h3>Weight</h3>
                <ul className='rules'>
                    <li>1st Place points for the week - 7 points</li>
                    <li>2nd Place points for the week- 5 points</li>
                    <li>3rd Place points for the week- 3 points</li>
                    <li>4th Place points for the week - 1 point</li>
                </ul>
                <p>In case of ties, add both place's points, then split evenly.
                    If there is gain, get 0 points in that section
                </p>
                <h3>Stomach</h3>
                <ul className='rules'>
                    <li>1st Place points for the week - 7 points</li>
                    <li>2nd Place points for the week- 5 points</li>
                    <li>3rd Place points for the week- 3 points</li>
                    <li>4th Place points for the week - 1 point</li>
                </ul>
                <p>In case of ties, add both place's points, then split evenly.
                    If there is gain, get 0 points in that section
                </p>
                <h3>Workouts</h3>
                <ul className='rules'>
                    <li>1 point per each Strength Workout</li>
                    <li>1 point per each Cardio Workout</li>
                    <li>Only 1 Strenght and 1 Cardio Workout eligible for points per day</li>
                </ul>
            </div>
        )
    }
}

export default Rules
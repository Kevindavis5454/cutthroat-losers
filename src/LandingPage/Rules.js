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
                    <li>If you meet or surpass goal- 1 point per workout</li>
                    <li>If you do not meet goal- 0 points</li>
                </ul>
                <h3>Bingo</h3>
                <ul className='rules'>
                    <li>Introduce at the start of Week 2</li>
                    <li>You may fill up to 4 slots per day</li>
                    <li>There are only 3 open slots for each Bingo space</li>
                    <li>5 in a row- Vertical, Horizontal, or Diagonal Bingos</li>
                </ul>
                <ul className='rules'>
                    <li>First person to complete a Bingo- 7 points</li>
                    <li>Second person to complete a Bingo- 5 Points</li>
                    <li>Third person to complete a Bingo-5 points</li>
                    <li>Fourth person to complete a Bingo-3 points</li>
                    <li>Fifth person to complete a Bingo-3 points</li>
                    <li>Blackout the board- 15 points</li>
                </ul>
                <h3>Sabotages</h3>
                <ul className='rules'>
                    <li>Can be assigned at anytime</li>
                    <li>"1 week" counts as Friday-Thursday</li>
                    <li>You can spend the same amount of points someone else spent to block a sabotage</li>
                    <li>If a sabotage is thought to be unfair, a majority vote will overrule it</li>
                </ul>
            </div>
        )
    }
}

export default Rules
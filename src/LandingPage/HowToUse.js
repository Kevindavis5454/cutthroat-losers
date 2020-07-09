import React from "react";
import './landingPage.css'

class HowToUse extends React.Component {

    render () {
        return (
            <div className='landing-div'>
                <h1>How To Use</h1>
                <ol className='how-ordered'>
                    <li>Decide on an Admin to create your game and set up the parameters of the game.</li>
                    <li>Contestants create accounts to track their personal progress and save their data</li>
                    <li>Explore the site and learn how to do your weekly and daily check-ins</li>
                    <li>Get ready to lose weight and have a great time!</li>
                </ol>
            </div>
        )
    }
}

export default HowToUse
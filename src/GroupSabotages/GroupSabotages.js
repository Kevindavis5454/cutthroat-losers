import React from "react";
import './groupsabotages.css'

class GroupSabotages extends React.Component {

    render () {

        return (
            <div className='groupSabo-box-div'>
                <h3>Current Sabotages in effect for the group:</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h3 className='player1'>Kevin</h3>
                            <span className='sabotages'>Must eat chinese food once a day for a week</span>
                        </div>
                    </div>
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h3 className='player2'>Bork Bork</h3>
                            <span className='sabotages'>Cannot have the ball thrown for a week</span>
                        </div>
                    </div>
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h3 className='player3'>Woof Woof</h3>
                            <span className='sabotages'>No licking yourself for a week</span>
                        </div>
                    </div>
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h3 className='player4'>Moon Moon</h3>
                            <span className='sabotages'>Only get 1 belly rub a day</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupSabotages
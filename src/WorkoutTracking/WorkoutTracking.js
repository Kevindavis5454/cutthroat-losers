import React from "react";
import "./workouttracking.css"
import { VictoryChart, VictoryBar } from 'victory'

class WorkoutTracking extends React.Component {

    render () {
        return (
            <>
                <div className="workout-box-div">
                    <h3 className='player1'>Kevin's Workout Tracking</h3>
                </div>
                <div className='workout-buttons'>
                    <button className='glow-on-hover button-left'>Strength Workout</button>
                    <button className='glow-on-hover button-right'>Cardio Workout</button>
                </div>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h3>Strength Workouts</h3>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: { fill: "#bc4123" },
                                    }}
                                    data = {[
                                        {x: "Week 1", y: 14},
                                        {x: "Week 2", y: 10},
                                        {x: "Week 3", y: 3},
                                        {x: "Week 4", y: 12}
                                    ]}

                                />
                            </VictoryChart>
                        </div>
                    </div>
                        <div className='flex-cell-workout'>
                            <div className='flex-item-workout'>
                                <h3>Cardio Workouts</h3>
                                <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                    <VictoryBar
                                        labels={({ datum }) => datum.y }
                                        style={{
                                            data: {fill: "#ffce54"},
                                        }}
                                        data = {[
                                            {x: "Week 1", y: 4},
                                            {x: "Week 2", y: 3},
                                            {x: "Week 3", y: 5},
                                            {x: "Week 4", y: 6}
                                        ]}

                                    />
                                </VictoryChart>
                            </div>
                    </div>
                </div>
                </>
        )
    }
}

export default WorkoutTracking
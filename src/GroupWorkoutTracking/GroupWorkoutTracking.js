import React from "react";
import "./groupworkouttracking.css"
import { VictoryChart, VictoryBar } from 'victory'

class GroupWorkoutTracking extends React.Component {

    render () {
        return (
            <div className='groupWorkout-box-div'>
                <h3>Group Workout Progress</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                        <h5>Week 1</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: {
                                            fill: ({ datum }) => datum.fill,
                                        }
                                    }}
                                    data = {[
                                        {x: "Kevin", y: 2, fill: "#34bf49"},
                                        {x: "Bork Bork", y: 4, fill: "#da4453"},
                                        {x: "Woof Woof", y: 5, fill: "#ffce54"},
                                        {x: "Moon Moon", y: 1, fill: "#48cfad"}
                                        ]}
                                />
                            </VictoryChart>
                        </div>
                    </div>
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h5>Week 2</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: {
                                            fill: ({ datum }) => datum.fill,
                                        }
                                    }}
                                    data = {[
                                        {x: "Kevin", y: 14, fill: "#34bf49"},
                                        {x: "Bork Bork", y: 10, fill: "#da4453"},
                                        {x: "Woof Woof", y: 3, fill: "#ffce54"},
                                        {x: "Moon Moon", y: 12, fill: "#48cfad"}
                                    ]}
                                />
                            </VictoryChart>
                        </div>
                    </div>
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h5>Week 3</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: {
                                            fill: ({ datum }) => datum.fill,
                                        }
                                    }}
                                    data = {[
                                        {x: "Kevin", y: 3, fill: "#34bf49"},
                                        {x: "Bork Bork", y: 9, fill: "#da4453"},
                                        {x: "Woof Woof", y: 11, fill: "#ffce54"},
                                        {x: "Moon Moon", y: 5, fill: "#48cfad"}
                                    ]}
                                />
                            </VictoryChart>
                    </div>
                </div>
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h5>Week 4</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: {
                                            fill: ({ datum }) => datum.fill,
                                        }
                                    }}
                                    data = {[
                                        {x: "Kevin", y: 4, fill: "#34bf49"},
                                        {x: "Bork Bork", y: 7, fill: "#da4453"},
                                        {x: "Woof Woof", y: 2, fill: "#ffce54"},
                                        {x: "Moon Moon", y: 8, fill: "#48cfad"}
                                    ]}
                                />
                            </VictoryChart>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupWorkoutTracking
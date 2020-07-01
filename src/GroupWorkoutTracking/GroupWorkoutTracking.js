import React from "react";
import "./groupworkouttracking.css"
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter, VictoryBar } from 'victory'

class GroupWorkoutTracking extends React.Component {

    render () {
        return (
            <div className='groupWorkout-box-div'>
                <h3>Group Workout Progress</h3>
                <div className="flex-container">
                    <div className='flex-cell'>
                        <div className='flex-item'>
                        <h5>Week 1</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: { fill: "#c43a31" }
                                    }}
                                    data = {[
                                        {x: "Kevin", y: 2},
                                        {x: "Katy", y: 4},
                                        {x: "Galen", y: 5},
                                        {x: "Kristina", y: 1}
                                        ]}
                                />
                            </VictoryChart>
                        </div>
                    </div>
                    <div className='flex-cell'>
                        <div className='flex-item'>
                            <h5>Week 2</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: { fill: "#c43a31" }
                                    }}
                                    data = {[
                                        {x: "Kevin", y: 14},
                                        {x: "Katy", y: 10},
                                        {x: "Galen", y: 3},
                                        {x: "Kristina", y: 12}
                                    ]}
                                />
                            </VictoryChart>
                        </div>
                    </div>
                    <div className='flex-cell'>
                        <div className='flex-item'>
                            <h5>Week 3</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: { fill: "#c43a31" }
                                    }}
                                    data = {[
                                        {x: "Kevin", y: 3},
                                        {x: "Katy", y: 9},
                                        {x: "Galen", y: 11},
                                        {x: "Kristina", y: 5}
                                    ]}
                                />
                            </VictoryChart>
                    </div>
                </div>
                    <div className='flex-cell'>
                        <div className='flex-item'>
                            <h5>Week 4</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: { fill: "#c43a31" }
                                    }}
                                    data = {[
                                        {x: "Kevin", y: 4},
                                        {x: "Katy", y: 7},
                                        {x: "Galen", y: 2},
                                        {x: "Kristina", y: 8}
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
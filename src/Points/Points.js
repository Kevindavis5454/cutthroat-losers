import React from "react";
import "./points.css"
import { Link } from "react-router-dom";
import WeightTracking from "../WeightTracking/WeightTracking";
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter } from 'victory'

class Points extends React.Component {

    render () {

        return (
            <div className='personal-points-div'>
                <h3 className='player1'>Kevin's Points</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout personal-points'>
                        <div className='flex-item-workout'>
                            <h3 className='player1'>Current Points: <span>49</span></h3>
                            <span className='points-gained'>Points Gained</span>
                            <span className='points-spent'>Points Spent</span>
                            <VictoryChart viewBox="0, 0, width, height"
                                          containerComponent={<VictoryVoronoiContainer/>}
                                          minDomain={{ y: 0 }} maxDomain={{ y: 100}}
                            >
                                <VictoryGroup
                                    color="#bc4123"
                                    labels={({ datum }) => `y: ${datum.y}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={[
                                        { x: "Week 1", y: 0 },
                                        { x: "Week 2", y: 12 },
                                        { x: "Week 3", y: 35 },
                                        { x: "Week 4", y: 20 }
                                    ]}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#ffce54"
                                    labels={({ datum }) => `y: ${datum.y}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={[
                                        { x: "Week 1", y: 0 },
                                        { x: "Week 2", y: 5 },
                                        { x: "Week 3", y: 12 },
                                        { x: "Week 4", y: 6 }
                                    ]}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#34bf49"
                                    labels={({ datum }) => `y: ${datum.y}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={[
                                        { x: "Week 1", y: 0 },
                                        { x: "Week 2", y: 0 },
                                        { x: "Week 3", y: 7 },
                                        { x: "Week 4", y: 30 },
                                        { x: "Week 5", y: 49 }
                                    ]}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                            </VictoryChart>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Points
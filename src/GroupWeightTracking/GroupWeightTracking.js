import React from "react";
import "./groupweighttracking.css"
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter } from 'victory'

class GroupWeightTracking extends React.Component {

    render () {
        return (
            <div className='weight-tracker-box'>
                <h3>Group Weight Progress</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout group-weight-tracker'>
                        <div className='flex-item-workout'>
                            <VictoryChart viewBox="0, 0, width, height"
                                          containerComponent={<VictoryVoronoiContainer/>}
                                          minDomain={{ y: 140 }} maxDomain={{ y: 300}}
                            >
                                <VictoryGroup
                                    color="#34bf49"
                                    labels={({ datum }) => `y: ${datum.y}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={[
                                        { x: "Week 1", y: 200 },
                                        { x: "Week 2", y: 198 },
                                        { x: "Week 3", y: 195 },
                                        { x: "Week 4", y: 192 }
                                    ]}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#da4453"
                                    labels={({ datum }) => `y: ${datum.y}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={[
                                        { x: "Week 1", y: 189 },
                                        { x: "Week 2", y: 188 },
                                        { x: "Week 3", y: 186 },
                                        { x: "Week 4", y: 184 }
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
                                        { x: "Week 1", y: 175 },
                                        { x: "Week 2", y: 172 },
                                        { x: "Week 3", y: 168 },
                                        { x: "Week 4", y: 171}
                                    ]}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#48cfad"
                                    labels={({ datum }) => `y: ${datum.y}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={[
                                        { x: "Week 1", y: 255 },
                                        { x: "Week 2", y: 250 },
                                        { x: "Week 3", y: 252 },
                                        { x: "Week 4", y: 245 }
                                    ]}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                            </VictoryChart>
                            <ul>
                                <span className='player1'><li>Kevin</li></span>
                                <span className='player2'><li>Bork Bork</li></span>
                                <span className='player3'><li>Woof Woof</li></span>
                                <span className='player4'><li>Moon Moon</li></span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupWeightTracking
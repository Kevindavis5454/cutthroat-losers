import React from 'react'
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter } from 'victory'
import {Link} from "react-router-dom";
import "./WeightTracking.css"


class WeightTracking extends React.Component {
    render() {
        return (
            <div className='weight-tracker-box'>
                <h3 className='player1'>Kevin's Weight Tracking</h3>
                <span>Starting Weight: 200</span>
                <span>Current Weight: 192</span>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout weight-tracker-single'>
                        <div className='flex-item-workout'>
                            <VictoryChart viewBox="0, 0, width, height"
                                          containerComponent={<VictoryVoronoiContainer/>}
                                          minDomain={{ y: 170 }} maxDomain={{ y: 220}}
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
                            </VictoryChart>
                            <h4>Weight Lost: 8lbs!</h4>
                        </div>
                    </div>
                </div>
                </div>
    );
    }
}
export default WeightTracking
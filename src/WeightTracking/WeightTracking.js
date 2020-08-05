import React from 'react'
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter, VictoryAxis } from 'victory'
import {Link} from "react-router-dom";
import "./WeightTracking.css"
import config from "../config";
import moment from 'moment'


class WeightTracking extends React.Component {

    state = {
        weights: []
    }

    componentDidMount() {

        const getWeightInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/userWeights?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        async function getUserWeights() {
            return await Promise.all([getWeightInfo()])
        }

        getUserWeights()
            .then(([results]) => {
                console.log(results)
                this.setState({
                    weights: results
                })
            })
    }

    render() {

        const date = moment()

        const weightData = this.state.weights
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
                                          minDomain={{ y: 140 }} maxDomain={{ y: 260}}
                                          scale={{ x: 'time'}}

                            >
                                <VictoryGroup
                                    color="#bc4123"
                                    labels={({ datum }) => `y: ${datum.y}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                /*[
                                { x: "Week 1", y: 200 },
                                { x: "Week 2", y: 198 },
                                { x: "Week 3", y: 195 },
                                { x: "Week 4", y: 192 }
                                ]*/
                                    data={this.state.weights}
                                    y='weight'
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
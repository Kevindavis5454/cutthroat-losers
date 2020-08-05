import React from 'react'
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter, VictoryAxis, VictoryLabel } from 'victory'
import "./WeightTracking.css"
import config from "../config";
import moment from 'moment'


class WeightTracking extends React.Component {

    state = {
        weights: [],
        weightPageStats: []
    }

    componentDidMount() {

        let m = moment();

        const getWeightInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/userWeights?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        function getUserWeights() {
            return Promise.all([getWeightInfo()])
        }

        const getUserInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/weightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        function getUserStats() {
            return Promise.all([getUserInfo()])
        }

        getUserWeights()
            .then(([results]) => {
                const formattedDates = results.map(date => {
                    let dateMoment = moment(date.date_created)
                   return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.weight}


                })
                console.log(formattedDates)
                this.setState({
                    weights: formattedDates
                })

            })
        getUserStats()
            .then(([weightStats]) => {
                this.setState({
                    weightPageStats: weightStats
                })
                console.log(this.state.weightPageStats, 'state weightPageStats')
            })
    }

    render() {
        return (
            <div className='weight-tracker-box'>
                <h3 className='player1'>Kevin's Weight Tracking</h3>
                <span>Goal Weight: {this.state.weightPageStats.goal_weight}</span>
                <span>Current Weight: {this.state.weightPageStats.current_weight}</span>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout weight-tracker-single'>
                        <div className='flex-item-workout'>
                            <VictoryChart viewBox="0, 0, width, height"
                                          containerComponent={<VictoryVoronoiContainer/>}
                                          minDomain={{ y: 140 }} maxDomain={{ y: 260}}



                            >
                                <VictoryLabel text={this.state.weightPageStats.display_name} x={225} y={30} textAnchor="middle"/>
                                <VictoryGroup
                                    color="#bc4123"
                                    labels={({ datum }) => `Weight: ${datum.y} Date:${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.weights}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryAxis
                                    dependentAxis
                                    label="Weight"
                                    style={{
                                        axisLabel: { fontSize: 16, padding: 32},
                                    }}
                                />
                                <VictoryAxis
                                    label='Date'
                                    style={{ axis: { stroke: '#000' },
                                        axisLabel: { fontSize: 16, padding: 30},
                                        ticks: { stroke: '#000' },
                                        tickLabels: { fontSize: 8, padding: 2, angle:45, verticalAnchor: 'middle', textAnchor:'start' }
                                    }}

                                />
                            </VictoryChart>
                        </div>
                    </div>
                </div>
                </div>
    );
    }
}
export default WeightTracking
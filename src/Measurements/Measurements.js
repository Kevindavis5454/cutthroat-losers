import React from "react";
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter, VictoryAxis, VictoryLabel } from 'victory'
import "../WeightTracking/WeightTracking.css"
import config from "../config";
import moment from 'moment'

class Measurements extends React.Component {
    state = {
        measurements: [],
        name: [],
    }

    componentDidMount() {

        const getMeasurementInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/measurementInfo?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        function getMeasurements() {
            return Promise.all([getMeasurementInfo()])
        }

        const getUserInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/weightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }


        getMeasurements()
            .then(([results]) => {
                const formattedDates = results.map(date => {
                    let dateMoment = moment(date.date_created)
                    return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.measurement}
                })
                this.setState({
                    measurements: formattedDates
                })
                getUserInfo()
                    .then(([measurementStats]) => {
                        this.setState({
                            name: measurementStats.display_name,
                        })

                    })


            })
    }

    render () {

        console.log(this.state.measurements, 'Formatted dates')
        return (
            <div className='weight-tracker-box'>
                <h3 className='player1'>{this.state.name}'s Measurement Tracking</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout weight-tracker-single'>
                        <div className='flex-item-workout'>
                            <VictoryChart viewBox="0, 0, width, height"
                                          containerComponent={<VictoryVoronoiContainer/>}
                                          minDomain={{ y: 30 }} maxDomain={{ y: 50}}
                            >
                                <VictoryLabel text={this.state.name} x={225} y={30} textAnchor="middle"/>
                                <VictoryGroup
                                    color="#bc4123"
                                    labels={({ datum }) => `${datum.y}: Inches Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.measurements}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryAxis
                                    dependentAxis
                                    label="Measurement"
                                    style={{
                                        axisLabel: { fontSize: 16, padding: 35},
                                    }}
                                />
                                <VictoryAxis
                                    label='Date'
                                    style={{ axis: { stroke: '#000' },
                                        axisLabel: { fontSize: 16, padding: 36},
                                        ticks: { stroke: '#000' },
                                        tickLabels: { fontSize: 8, padding: 2, angle:45, verticalAnchor: 'middle', textAnchor:'start' }
                                    }}

                                />
                            </VictoryChart>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Measurements
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
            return fetch(`${config.API_ENDPOINT}/api/measurements/getMeasurementInfo?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        function getMeasurements() {
            return Promise.all([getMeasurementInfo()])
        }

        const getUserInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/weightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
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

    renderPlayername = () => {
        if (this.state.name == localStorage.getItem("player1")) {
            return "player1"
        }
        if (this.state.name == localStorage.getItem("player2")) {
            return "player2"
        }
        if (this.state.name == localStorage.getItem("player3")) {
            return "player3"
        }
        if (this.state.name == localStorage.getItem("player4")) {
            return "player4"
        }
    }

    renderPlayerColor = () => {
        if (this.state.name == localStorage.getItem("player1")) {
            return "#34bf49"
        }
        if (this.state.name == localStorage.getItem("player2")) {
            return "#da4453"
        }
        if (this.state.name == localStorage.getItem("player3")) {
            return "#ffce54"
        }
        if (this.state.name == localStorage.getItem("player4")) {
            return "#48cfad"
        }
    }

    handleMeasurementSubmit = e => {
        e.preventDefault()
        const { measurement_submit } = e.target
        const measurement = {
            contest_id: parseInt(localStorage.getItem("contest Id")),
            user_id: parseInt(localStorage.getItem("user Id")),
            measurement: measurement_submit.value,
        }
        fetch(`${config.API_ENDPOINT}/api/measurements`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(measurement),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                else {
                    alert("Your Measurement has been recorded. Great Job!")
                }
            })
            .catch(error => {
                console.error({error})
            })
    }

    render () {

        return (
            <div className='weight-tracker-box'>
                <h3 className={this.renderPlayername()}>{this.state.name}'s Measurement Tracking</h3>
                <form onSubmit={this.handleMeasurementSubmit} className='workout-buttons'>
                    <button type='submit' className='glow-on-hover button-left' name='measurement' id='measurement'>Measurement</button>
                     <input required type='text'
                           /*onKeyPress="return (event.charCode !=8 && event.charCode ==0 || ( event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)))" }*/
                           placeholder='38.2' name='measurement_submit' id='measurement_submit'></input>
                </form>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout weight-tracker-single'>
                        <div className='flex-item-workout'>
                            <VictoryChart viewBox="0, 0, width, height"
                                          containerComponent={<VictoryVoronoiContainer/>}
                                          minDomain={{ y: 30 }} maxDomain={{ y: 50}}
                            >
                                <VictoryLabel text={this.state.name} x={225} y={30} textAnchor="middle"/>
                                <VictoryGroup
                                    color={this.renderPlayerColor()}
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
                                        tickLabels: {fill: "#5eacee",}
                                    }}
                                />
                                <VictoryAxis
                                    label='Date'
                                    style={{ axis: { stroke: '#000' },
                                        axisLabel: { fontSize: 16, padding: 36},
                                        ticks: { stroke: '#000' },
                                        tickLabels: { fill: "#5eacee", fontSize: 8, padding: 2, angle:45, verticalAnchor: 'middle', textAnchor:'start' }
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
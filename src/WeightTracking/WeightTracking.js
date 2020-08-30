import React from 'react'
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter, VictoryAxis, VictoryLabel } from 'victory'
import "./WeightTracking.css"
import config from "../config";
import moment from 'moment'


class WeightTracking extends React.Component {

    state = {
        weights: [],
        name: [],
        currentWeight: [],
        goalWeight: []
    }

    componentDidMount() {

        const getWeightInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/userWeights?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        function getUserWeights() {
            return Promise.all([getWeightInfo()])
        }

        const getUserInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/weightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }


        getUserWeights()
            .then(([results]) => {
                const formattedDates = results.map(date => {
                    let dateMoment = moment(date.date_created)
                   return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.weight}
                })
                this.setState({
                    weights: formattedDates
                })
                getUserInfo()
                    .then(([weightStats]) => {
                        this.setState({
                            name: weightStats.display_name,
                            currentWeight: weightStats.current_weight,
                            goalWeight: weightStats.goal_weight

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

    handleWeightSubmit = e => {
        e.preventDefault()
        const { weight_submit } = e.target
        const weighin = {
            contest_id: parseInt(localStorage.getItem("contest Id")),
            user_id: parseInt(localStorage.getItem("user Id")),
            weight: weight_submit.value,
        }
        const weightUpdate = {
            current_weight: weight_submit.value,
        }
        fetch(`${config.API_ENDPOINT}/api/contestInfo/logWeight`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(weighin),
        })
        fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId?user_id=${weighin.user_id}&contest_id=${weighin.contest_id}`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(weightUpdate),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                else {
                    alert("Your Weigh-in has been recorded. Great Job!")
                    window.location.reload(false)
                }
            })
            .catch(error => {
                console.error({error})
            })
    }

    render() {

        function keyPress (event)  {
            return (event.charCode !=8 && event.charCode ==0 || ( event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)))
        }

        return (
            <div className='weight-tracker-box'>
                <h3 className={this.renderPlayername()}>{this.state.name}'s Weight Tracking</h3>
                <form onSubmit={this.handleWeightSubmit} className='workout-buttons'>
                    <button type='submit' className='glow-on-hover button-left' name='weight' id='weight'>Weight</button>
                    <input required type='text' onKeyPress={() => this.keyPress} placeholder='185.9' name='weight_submit' id='weight_submit'></input>
                </form>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout weight-tracker-single'>
                        <div className='flex-item-workout'>
                            <h3>Goal Weight: {this.state.goalWeight}</h3>
                            <h3>Current Weight: {this.state.currentWeight}</h3>
                            <VictoryChart viewBox="0, 0, width, height"
                                          containerComponent={<VictoryVoronoiContainer/>}
                                          minDomain={{ y: 140 }} maxDomain={{ y: 260}}



                            >
                                <VictoryLabel text={this.state.name} x={225} y={30} textAnchor="middle"/>
                                <VictoryGroup
                                    color={this.renderPlayerColor()}
                                    labels={({ datum }) => `Weight: ${datum.y} Date: ${datum.x}`}
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
                                        axisLabel: { fontSize: 16, padding: 35},
                                        tickLabels: {fill: "#5eacee",}
                                    }}
                                />
                                <VictoryAxis
                                    label='Date'
                                    style={{ axis: { stroke: '#000' },
                                        axisLabel: { fontSize: 16, padding: 36},
                                        ticks: { stroke: '#000' },
                                        tickLabels: {fill: "#5eacee", fontSize: 8, padding: 2, angle:45, verticalAnchor: 'middle', textAnchor:'start' }
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
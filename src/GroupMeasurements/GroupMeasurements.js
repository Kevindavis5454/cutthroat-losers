import React from "react";
import "../GroupWeightTracking/groupweighttracking.css"
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter, VictoryAxis } from 'victory'
import config from "../config";
import moment from "moment";

class GroupMeasurements extends React.Component {

    state = {
        contestants: [],
        user1Measurements: [],
        user1Info: [],
        user2Measurements: [],
        user2Info: [],
        user3Measurements: [],
        user3Info: [],
        user4Measurements: [],
        user4Info: [],
        user5Measurements: [],
        user5Info: [],
        user6Measurements: [],
        user6Info: [],

    }

    componentDidMount() {

        const getContestants = () => {
            return fetch(`${config.API_ENDPOINT}/api/contesttouser/getOnlyUserId?contest_id=${localStorage.getItem("contest Id")}`)
                .then(res => res.json())
        }

        getContestants()
            .then((contestants) => {
                let contestantIds = contestants.map(user => {
                    return user.user_id
                })
                this.setState({
                    contestants: contestantIds
                })
                if (this.state.contestants[0] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/measurements/getMeasurementInfo?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userMeasurement)=> {
                            const formattedDates = userMeasurement.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.measurement}
                            })
                            this.setState({
                                user1Measurements: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo
                                    this.setState({
                                        user1Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[1] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/measurements/getMeasurementInfo?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userMeasurement)=> {
                            const formattedDates = userMeasurement.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.measurement}
                            })
                            this.setState({
                                user2Measurements: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo
                                    this.setState({
                                        user2Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[2] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/measurements/getMeasurementInfo?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userMeasurement)=> {
                            const formattedDates = userMeasurement.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.measurement}
                            })
                            this.setState({
                                user3Measurements: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo
                                    this.setState({
                                        user3Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[3] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/measurements/getMeasurementInfo?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userMeasurement)=> {
                            const formattedDates = userMeasurement.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.measurement}
                            })
                            this.setState({
                                user4Measurements: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo
                                    this.setState({
                                        user4Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[4] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/measurements/getMeasurementInfo?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[4]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[4]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userMeasurement)=> {
                            const formattedDates = userMeasurement.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.measurement}
                            })
                            this.setState({
                                user5Measurements: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo
                                    this.setState({
                                        user5Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[5] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/measurements/getMeasurementInfo?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[5]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[5]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userMeasurement)=> {
                            const formattedDates = userMeasurement.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.measurement}
                            })
                            this.setState({
                                user6Measurements: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo
                                    this.setState({
                                        user6Info: contestantName
                                    })
                                })
                        })
                }

            })

    }

    render () {
        return (
            <div className='weight-tracker-box'>
                <h3>Group Stomach Measurement Progress</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout group-weight-tracker'>
                        <div className='flex-item-workout'>
                            <VictoryChart viewBox="0, 0, width, height"
                                          containerComponent={<VictoryVoronoiContainer/>}
                                          minDomain={{ y: 30 }} maxDomain={{ y: 50}}
                            >
                                <VictoryGroup
                                    color="#34bf49"
                                    labels={({ datum }) => `${datum.y}: Inches Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user1Measurements}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#da4453"
                                    labels={({ datum }) => `${datum.y}: Inches Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user2Measurements}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#ffce54"
                                    labels={({ datum }) => `${datum.y}: Inches Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user3Measurements}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#48cfad"
                                    labels={({ datum }) => `${datum.y}: Inches Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user4Measurements}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#ffce54"
                                    labels={({ datum }) => `${datum.y}: Inches Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user5Measurements}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#ffce54"
                                    labels={({ datum }) => `${datum.y}: Inches Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user6Measurements}
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
                                        tickLabels: {fill: "#5eacee", fontSize: 10, padding: 2, angle:45, verticalAnchor: 'middle', textAnchor:'start' }
                                    }}

                                />
                            </VictoryChart>
                            <ul>
                                <span className='player1'><li>{this.state.user1Info}</li></span>
                                <span className='player2'><li>{this.state.user2Info}</li></span>
                                <span className='player3'><li>{this.state.user3Info}</li></span>
                                <span className='player4'><li>{this.state.user4Info}</li></span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupMeasurements
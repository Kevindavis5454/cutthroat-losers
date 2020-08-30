import React from "react";
import "./groupweighttracking.css"
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter, VictoryAxis } from 'victory'
import config from "../config";
import moment from "moment";

class GroupWeightTracking extends React.Component {

    state = {
        contestants: [],
        user1Weights: [],
        user1Info: [],
        user2Weights: [],
        user2Info: [],
        user3Weights: [],
        user3Info: [],
        user4Weights: [],
        user4Info: [],
        user5Weights: [],
        user5Info: [],
        user6Weights: [],
        user6Info: [],

    }

    componentDidMount() {

        const getContestants = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUserIds?contest_id=${localStorage.getItem("contest Id")}`)
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
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/userWeights?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userWeight)=> {
                            const formattedDates = userWeight.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.weight}
                            })
                            this.setState({
                                user1Weights: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        return name.display_name
                                    })
                                    this.setState({
                                        user1Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[1] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/userWeights?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userWeight)=> {
                            const formattedDates = userWeight.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.weight}
                            })
                            this.setState({
                                user2Weights: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        return name.display_name
                                    })
                                    this.setState({
                                        user2Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[2] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/userWeights?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userWeight)=> {
                            const formattedDates = userWeight.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.weight}
                            })
                            this.setState({
                                user3Weights: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        return name.display_name
                                    })
                                    this.setState({
                                        user3Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[3] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/userWeights?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userWeight)=> {
                            const formattedDates = userWeight.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.weight}
                            })
                            this.setState({
                                user4Weights: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        return name.display_name
                                    })
                                    this.setState({
                                        user4Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[4] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/userWeights?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[4]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[4]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userWeight)=> {
                            const formattedDates = userWeight.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.weight}
                            })
                            this.setState({
                                user5Weights: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        return name.display_name
                                    })
                                    this.setState({
                                        user5Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[5] !== undefined) {
                    const getWeightInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/userWeights?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[5]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[5]}`)
                            .then(res => res.json())
                    }
                    getWeightInfo()
                        .then((userWeight)=> {
                            const formattedDates = userWeight.map(date => {
                                let dateMoment = moment(date.date_created)
                                return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.weight}
                            })
                            this.setState({
                                user6Weights: formattedDates
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        return name.display_name
                                    })
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
                <h3>Group Weight Progress</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout group-weight-tracker'>
                        <div className='flex-item-workout'>
                            <VictoryChart viewBox="0, 0, width, height"
                                          containerComponent={<VictoryVoronoiContainer/>}
                                          minDomain={{ y: 140 }} maxDomain={{ y: 260}}
                            >
                                <VictoryGroup
                                    color="#34bf49"
                                    labels={({ datum }) => `Weight: ${datum.y} Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user1Weights}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#da4453"
                                    labels={({ datum }) => `Weight: ${datum.y} Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user2Weights}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#ffce54"
                                    labels={({ datum }) => `Weight: ${datum.y} Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user3Weights}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#48cfad"
                                    labels={({ datum }) => `Weight: ${datum.y} Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user4Weights}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#ffce54"
                                    labels={({ datum }) => `Weight: ${datum.y} Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user5Weights}
                                >
                                    <VictoryLine/>
                                    <VictoryScatter
                                        size={({ active }) => active ? 8 : 3}
                                    />
                                </VictoryGroup>
                                <VictoryGroup
                                    color="#ffce54"
                                    labels={({ datum }) => `Weight: ${datum.y} Date: ${datum.x}`}
                                    labelComponent={
                                        <VictoryTooltip
                                            style={{ fontSize: 10 }}
                                        />
                                    }
                                    data={this.state.user6Weights}
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

export default GroupWeightTracking
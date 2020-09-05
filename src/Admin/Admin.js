import React from "react";
import "./admin.css"
import Sidebar from "../SideBar/Sidebar";
import { Route } from 'react-router-dom'
import GroupWorkoutTracking from "../GroupWorkoutTracking/GroupWorkoutTracking";
import AdminPointAssignWeight from "./AdminPointAssignWeight";
import config from "../config";
import moment from "moment";
import AdminPointAssignMeasurement from "./AdminPointAssignMeasurement";
import AdminContestToUser from "./AdminContestToUser";

class Admin extends React.Component {

    state = {
        contestants: [],
        user1Info: [],
        user2Info: [],
        user3Info: [],
        user4Info: [],
        user1Id: [],
        user2Id: [],
        user3Id: [],
        user4Id: [],
        user1WeightCurrent: [],
        user1WeightPrev: [],
        user2WeightCurrent: [],
        user2WeightPrev: [],
        user3WeightCurrent: [],
        user3WeightPrev: [],
        user4WeightCurrent: [],
        user4WeightPrev: [],
        user1MeasurementCurrent: [],
        user1MeasurementPrev: [],
        user2MeasurementCurrent: [],
        user2MeasurementPrev: [],
        user3MeasurementCurrent: [],
        user3MeasurementPrev: [],
        user4MeasurementCurrent: [],
        user4MeasurementPrev: [],
    }

    componentDidMount() {
        const getContestants = () => {
            return fetch(`${config.API_ENDPOINT}/api/currentstats/contestId/${localStorage.getItem("contest Id")}`)
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
                let userIdSort  = () =>
                {
                    this.state.contestants.map((id, index) => {
                        if (index === 0) {
                            return this.setState({
                                user1Id: id
                            })
                        }
                        if (index === 1) {
                            return this.setState({
                                user2Id: id
                            })
                        }
                        if (index === 2) {
                            return this.setState({
                                user3Id: id
                            })
                        }
                        if (index === 3) {
                            return this.setState({
                                user4Id: id
                            })
                        }
                    })
                }
                userIdSort()
                if (this.state.contestants[0] !== undefined) {

                    const getAdminMeasurement = () => {
                        return fetch(`${config.API_ENDPOINT}/api/measurements/getAdminMeasurementProgress?user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getAdminWeight = () => {
                        return fetch(`${config.API_ENDPOINT}/api/weighins/getAdminUserWeights?user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }
                    getAdminWeight()
                        .then((weight) => {
                            const formattedDateWeight = () => weight.map((date, index) => {
                                let dateMoment = moment(date.date_created)
                                if (index === 0) {
                                    return this.setState({
                                        user1WeightCurrent: {date: `${dateMoment.format('YYYY/MM/DD')}`, weight: date.weight}
                                    })
                                }
                                if (index === 1) {
                                    return this.setState({
                                        user1WeightPrev: {date: `${dateMoment.format('YYYY/MM/DD')}`, weight: date.weight}
                                    })
                                }
                            })
                            formattedDateWeight()
                            getAdminMeasurement()
                                .then((measurement) => {
                                    const formattedDateMeasurement = () => measurement.map((date, index) => {
                                        let dateMoment = moment(date.date_created)
                                        if (index === 0) {
                                            return this.setState({
                                                user1MeasurementCurrent: {date: `${dateMoment.format('YYYY/MM/DD')}`, measurement: date.measurement}
                                            })
                                        }
                                        if (index === 1) {
                                            return this.setState({
                                                user1MeasurementPrev: {date: `${dateMoment.format('YYYY/MM/DD')}`, measurement: date.measurement}
                                            })
                                        }
                                    })
                                    formattedDateMeasurement()
                                    getContestantInfo()
                                        .then((contestantInfo)=> {
                                            let contestantName = contestantInfo
                                            this.setState({
                                                user1Info: contestantName
                                            })
                                        })

                                })

                        })
                }
                if (this.state.contestants[1] !== undefined) {
                    const getAdminMeasurement = () => {
                        return fetch(`${config.API_ENDPOINT}/api/measurements/getAdminMeasurementProgress?user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }

                    const getAdminWeight = () => {
                        return fetch(`${config.API_ENDPOINT}/api/weighins/getAdminUserWeights?user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }
                    getAdminWeight()
                        .then((weight) => {
                            const formattedDateWeight = () => weight.map((date, index) => {
                                let dateMoment = moment(date.date_created)
                                if (index === 0) {
                                    return this.setState({
                                        user2WeightCurrent: {date: `${dateMoment.format('YYYY/MM/DD')}`, weight: date.weight}
                                    })
                                }
                                if (index === 1) {
                                    return this.setState({
                                        user2WeightPrev: {date: `${dateMoment.format('YYYY/MM/DD')}`, weight: date.weight}
                                    })
                                }
                            })
                            formattedDateWeight()
                            getAdminMeasurement()
                                .then((measurement) => {
                                    const formattedDateMeasurement = () => measurement.map((date, index) => {
                                        let dateMoment = moment(date.date_created)
                                        if (index === 0) {
                                            return this.setState({
                                                user2MeasurementCurrent: {date: `${dateMoment.format('YYYY/MM/DD')}`, measurement: date.measurement}
                                            })
                                        }
                                        if (index === 1) {
                                            return this.setState({
                                                user2MeasurementPrev: {date: `${dateMoment.format('YYYY/MM/DD')}`, measurement: date.measurement}
                                            })
                                        }
                                    })
                                    formattedDateMeasurement()
                                    getContestantInfo()
                                        .then((contestantInfo)=> {
                                            let contestantName = contestantInfo
                                            this.setState({
                                                user2Info: contestantName
                                            })
                                        })

                                })

                        })

                }
                if (this.state.contestants[2] !== undefined) {
                    const getAdminMeasurement = () => {
                        return fetch(`${config.API_ENDPOINT}/api/measurements/getAdminMeasurementProgress?user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }

                    const getAdminWeight = () => {
                        return fetch(`${config.API_ENDPOINT}/api/weighins/getAdminUserWeights?user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }
                    getAdminWeight()
                        .then((weight) => {
                            const formattedDateWeight = () => weight.map((date, index) => {
                                let dateMoment = moment(date.date_created)
                                if (index === 0) {
                                    return this.setState({
                                        user3WeightCurrent: {date: `${dateMoment.format('YYYY/MM/DD')}`, weight: date.weight}
                                    })
                                }
                                if (index === 1) {
                                    return this.setState({
                                        user3WeightPrev: {date: `${dateMoment.format('YYYY/MM/DD')}`, weight: date.weight}
                                    })
                                }
                            })
                            formattedDateWeight()
                            getAdminMeasurement()
                                .then((measurement) => {
                                    const formattedDateMeasurement = () => measurement.map((date, index) => {
                                        let dateMoment = moment(date.date_created)
                                        if (index === 0) {
                                            return this.setState({
                                                user3MeasurementCurrent: {date: `${dateMoment.format('YYYY/MM/DD')}`, measurement: date.measurement}
                                            })
                                        }
                                        if (index === 1) {
                                            return this.setState({
                                                user3MeasurementPrev: {date: `${dateMoment.format('YYYY/MM/DD')}`, measurement: date.measurement}
                                            })
                                        }
                                    })
                                    formattedDateMeasurement()
                                    getContestantInfo()
                                        .then((contestantInfo)=> {
                                            let contestantName = contestantInfo
                                            this.setState({
                                                user3Info: contestantName
                                            })
                                        })

                                })

                        })

                }
                if (this.state.contestants[3] !== undefined) {
                    const getAdminMeasurement = () => {
                        return fetch(`${config.API_ENDPOINT}/api/measurements/getAdminMeasurementProgress?user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }

                    const getAdminWeight = () => {
                        return fetch(`${config.API_ENDPOINT}/api/weighins/getAdminUserWeights?user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }
                    getAdminWeight()
                        .then((weight) => {
                            const formattedDateWeight = () => weight.map((date, index) => {
                                let dateMoment = moment(date.date_created)
                                if (index === 0) {
                                    return this.setState({
                                        user4WeightCurrent: {date: `${dateMoment.format('YYYY/MM/DD')}`, weight: date.weight}
                                    })
                                }
                                if (index === 1) {
                                    return this.setState({
                                        user4WeightPrev: {date: `${dateMoment.format('YYYY/MM/DD')}`, weight: date.weight}
                                    })
                                }
                            })
                            formattedDateWeight()
                            getAdminMeasurement()
                                .then((measurement) => {
                                    const formattedDateMeasurement = () => measurement.map((date, index) => {
                                        let dateMoment = moment(date.date_created)
                                        if (index === 0) {
                                            return this.setState({
                                                user4MeasurementCurrent: {date: `${dateMoment.format('YYYY/MM/DD')}`, measurement: date.measurement}
                                            })
                                        }
                                        if (index === 1) {
                                            return this.setState({
                                                user4MeasurementPrev: {date: `${dateMoment.format('YYYY/MM/DD')}`, measurement: date.measurement}
                                            })
                                        }
                                    })
                                    formattedDateMeasurement()
                                    getContestantInfo()
                                        .then((contestantInfo)=> {
                                            let contestantName = contestantInfo
                                            this.setState({
                                                user4Info: contestantName
                                            })
                                        })

                                })

                        })

                }
            })
    }

    render () {
        return (
            <>
                <div className='personal-sidebar'>
                    <Route path='/admin' component={Sidebar} />
                </div>
                <div className='personal-content'>
                        <div className="flex-container">
                            <div className="flex-cell">
                                <div className="flex-item">
                                    <div>
                                        <AdminContestToUser />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-cell">
                                <div className="flex-item">
                                    <div>
                                        <GroupWorkoutTracking />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-cell">
                                <div className="flex-item">
                                    <div>
                                        <AdminPointAssignMeasurement
                                            user1Name={this.state.user1Info}
                                            user2Name={this.state.user2Info}
                                            user3Name={this.state.user3Info}
                                            user4Name={this.state.user4Info}

                                            user1Id={this.state.user1Id}
                                            user2Id={this.state.user2Id}
                                            user3Id={this.state.user3Id}
                                            user4Id={this.state.user4Id}

                                            user1CurrentMeasurement={this.state.user1MeasurementCurrent.measurement}
                                            user1CurrentMeasurementDate={this.state.user1MeasurementCurrent.date}
                                            user1PrevMeasurement={this.state.user1MeasurementPrev.measurement}
                                            user1PrevMeasurementDate={this.state.user1MeasurementPrev.date}

                                            user2CurrentMeasurement={this.state.user2MeasurementCurrent.measurement}
                                            user2CurrentMeasurementDate={this.state.user2MeasurementCurrent.date}
                                            user2PrevMeasurement={this.state.user2MeasurementPrev.measurement}
                                            user2PrevMeasurementDate={this.state.user2MeasurementPrev.date}

                                            user3CurrentMeasurement={this.state.user3MeasurementCurrent.measurement}
                                            user3CurrentMeasurementDate={this.state.user3MeasurementCurrent.date}
                                            user3PrevMeasurement={this.state.user3MeasurementPrev.measurement}
                                            user3PrevMeasurementDate={this.state.user3MeasurementPrev.date}

                                            user4CurrentMeasurement={this.state.user4MeasurementCurrent.measurement}
                                            user4CurrentMeasurementDate={this.state.user4MeasurementCurrent.date}
                                            user4PrevMeasurement={this.state.user4MeasurementPrev.measurement}
                                            user4PrevMeasurementDate={this.state.user4MeasurementPrev.date}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-cell">
                                <div className="flex-item">
                                        <AdminPointAssignWeight
                                            user1Name={this.state.user1Info}
                                            user2Name={this.state.user2Info}
                                            user3Name={this.state.user3Info}
                                            user4Name={this.state.user4Info}

                                            user1Id={this.state.user1Id}
                                            user2Id={this.state.user2Id}
                                            user3Id={this.state.user3Id}
                                            user4Id={this.state.user4Id}

                                            user1CurrentWeight={this.state.user1WeightCurrent.weight}
                                            user1CurrentWeightDate={this.state.user1WeightCurrent.date}
                                            user1PrevWeight={this.state.user1WeightPrev.weight}
                                            user1PrevWeightDate={this.state.user1WeightPrev.date}

                                            user2CurrentWeight={this.state.user2WeightCurrent.weight}
                                            user2CurrentWeightDate={this.state.user2WeightCurrent.date}
                                            user2PrevWeight={this.state.user2WeightPrev.weight}
                                            user2PrevWeightDate={this.state.user2WeightPrev.date}

                                            user3CurrentWeight={this.state.user3WeightCurrent.weight}
                                            user3CurrentWeightDate={this.state.user3WeightCurrent.date}
                                            user3PrevWeight={this.state.user3WeightPrev.weight}
                                            user3PrevWeightDate={this.state.user3WeightPrev.date}

                                            user4CurrentWeight={this.state.user4WeightCurrent.weight}
                                            user4CurrentWeightDate={this.state.user4WeightCurrent.date}
                                            user4PrevWeight={this.state.user4WeightPrev.weight}
                                            user4PrevWeightDate={this.state.user4WeightPrev.date}
                                        />
                                </div>
                            </div>
                        </div>
                </div>
            </>
        )
    }
}

export default Admin
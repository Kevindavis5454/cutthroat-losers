import React from "react";
import "./groupworkouttracking.css"
import { VictoryChart, VictoryBar } from 'victory'
import config from "../config";
import moment from "moment";

class GroupWorkoutTracking extends React.Component {

    state = {
        contestants: [],
        user1Info: [],
        user2Info: [],
        user3Info: [],
        user4Info: [],
        user5Info: [],
        user6Info: [],
        week1Data : [],
        week2Data : [],
        week3Data : [],
        week4Data : [],
        week5Data : [],
        week6Data : [],
        week7Data : [],
        week8Data : [],
        week9Data : [],
        week10Data: [],
        week11Data : [],
        week12Data : [],
    }


    componentDidMount() {


        let formattedWeek1Data= []
        let formattedWeek2Data= []
        let formattedWeek3Data= []
        let formattedWeek4Data= []
        let formattedWeek5Data= []
        let formattedWeek6Data= []
        let formattedWeek7Data= []
        let formattedWeek8Data= []
        let formattedWeek9Data= []
        let formattedWeek10Data= []
        let formattedWeek11Data= []
        let formattedWeek12Data= []

        Date.prototype.addDays = function(days) {
            let date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        let newDate = new Date(localStorage.getItem("contest StartDate"));


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
                    const getWorkoutInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupContestUserWorkouts?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }
                    getWorkoutInfo()
                        .then((workoutData)=> {
                            const javascriptFormattedDates = workoutData.map(dateCompare => {
                                return new Date(dateCompare.date_created)
                            })
                            const week1Data = []
                            const week2Data = []
                            const week3Data = []
                            const week4Data = []
                            const week5Data = []
                            const week6Data = []
                            const week7Data = []
                            const week8Data = []
                            const week9Data = []
                            const week10Data = []
                            const week11Data = []
                            const week12Data = []
                            const groupWorkoutDateSort = (formatted) => {
                                formatted.map(date => {
                                    if (date < newDate.addDays(7)) {
                                        return week1Data.push(date)
                                    }
                                    if (date >= newDate.addDays(7) && date < newDate.addDays(14)) {
                                        return week2Data.push(date)
                                    }
                                    if (date >= newDate.addDays(14) && date < newDate.addDays(21)) {
                                        return week3Data.push(date)
                                    }
                                    if (date >= newDate.addDays(21) && date < newDate.addDays(28)) {
                                        return week4Data.push(date)
                                    }
                                    if (date >= newDate.addDays(28) && date < newDate.addDays(35)) {
                                        return week5Data.push(date)
                                    }
                                    if (date >= newDate.addDays(35) && date < newDate.addDays(42)) {
                                        return week6Data.push(date)
                                    }
                                    if (date >= newDate.addDays(42) && date < newDate.addDays(49)) {
                                        return week7Data.push(date)
                                    }
                                    if (date >= newDate.addDays(49) && date < newDate.addDays(56)) {
                                        return week8Data.push(date)
                                    }
                                    if (date >= newDate.addDays(56) && date < newDate.addDays(63)) {
                                        return week9Data.push(date)
                                    }
                                    if (date >= newDate.addDays(63) && date < newDate.addDays(70)) {
                                        return week10Data.push(date)
                                    }
                                    if (date >= newDate.addDays(70) && date < newDate.addDays(77)) {
                                        return week11Data.push(date)
                                    }
                                    if (date >= newDate.addDays(77) && date < newDate.addDays(84)) {
                                        return week12Data.push(date)
                                    } else {
                                        return 'No dates in this range'
                                    }
                                })
                            }
                            groupWorkoutDateSort(javascriptFormattedDates)
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        formattedWeek1Data.push({x: name.display_name, y: week1Data.length, fill: "#34bf49"})
                                        formattedWeek2Data.push({x: name.display_name, y: week2Data.length, fill: "#34bf49"})
                                        formattedWeek3Data.push({x: name.display_name, y: week3Data.length, fill: "#34bf49"})
                                        formattedWeek4Data.push({x: name.display_name, y: week4Data.length, fill: "#34bf49"})
                                        formattedWeek5Data.push({x: name.display_name, y: week5Data.length, fill: "#34bf49"})
                                        formattedWeek6Data.push({x: name.display_name, y: week6Data.length, fill: "#34bf49"})
                                        formattedWeek7Data.push({x: name.display_name, y: week7Data.length, fill: "#34bf49"})
                                        formattedWeek8Data.push({x: name.display_name, y: week8Data.length, fill: "#34bf49"})
                                        formattedWeek9Data.push({x: name.display_name, y: week9Data.length, fill: "#34bf49"})
                                        formattedWeek10Data.push({x: name.display_name, y: week10Data.length, fill: "#34bf49"})
                                        formattedWeek11Data.push({x: name.display_name, y: week11Data.length, fill: "#34bf49"})
                                        formattedWeek12Data.push({x: name.display_name, y: week12Data.length, fill: "#34bf49"})
                                        return name.display_name
                                    })
                                    this.setState({
                                        user1Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[1] !== undefined) {
                    const getWorkoutInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupContestUserWorkouts?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }
                    getWorkoutInfo()
                        .then((workoutData)=> {
                            const javascriptFormattedDates = workoutData.map(dateCompare => {
                                return new Date(dateCompare.date_created)
                            })
                            const week1Data = []
                            const week2Data = []
                            const week3Data = []
                            const week4Data = []
                            const week5Data = []
                            const week6Data = []
                            const week7Data = []
                            const week8Data = []
                            const week9Data = []
                            const week10Data = []
                            const week11Data = []
                            const week12Data = []
                            const groupWorkoutDateSort = (formatted) => {
                                formatted.map(date => {
                                    if (date < newDate.addDays(7)) {
                                        return week1Data.push(date)
                                    }
                                    if (date >= newDate.addDays(7) && date < newDate.addDays(14)) {
                                        return week2Data.push(date)
                                    }
                                    if (date >= newDate.addDays(14) && date < newDate.addDays(21)) {
                                        return week3Data.push(date)
                                    }
                                    if (date >= newDate.addDays(21) && date < newDate.addDays(28)) {
                                        return week4Data.push(date)
                                    }
                                    if (date >= newDate.addDays(28) && date < newDate.addDays(35)) {
                                        return week5Data.push(date)
                                    }
                                    if (date >= newDate.addDays(35) && date < newDate.addDays(42)) {
                                        return week6Data.push(date)
                                    }
                                    if (date >= newDate.addDays(42) && date < newDate.addDays(49)) {
                                        return week7Data.push(date)
                                    }
                                    if (date >= newDate.addDays(49) && date < newDate.addDays(56)) {
                                        return week8Data.push(date)
                                    }
                                    if (date >= newDate.addDays(56) && date < newDate.addDays(63)) {
                                        return week9Data.push(date)
                                    }
                                    if (date >= newDate.addDays(63) && date < newDate.addDays(70)) {
                                        return week10Data.push(date)
                                    }
                                    if (date >= newDate.addDays(70) && date < newDate.addDays(77)) {
                                        return week11Data.push(date)
                                    }
                                    if (date >= newDate.addDays(77) && date < newDate.addDays(84)) {
                                        return week12Data.push(date)
                                    } else {
                                        return 'No dates in this range'
                                    }
                                })
                            }
                            groupWorkoutDateSort(javascriptFormattedDates)
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        formattedWeek1Data.push({x: name.display_name, y: week1Data.length, fill: "#da4453"})
                                        formattedWeek2Data.push({x: name.display_name, y: week2Data.length, fill: "#da4453"})
                                        formattedWeek3Data.push({x: name.display_name, y: week3Data.length, fill: "#da4453"})
                                        formattedWeek4Data.push({x: name.display_name, y: week4Data.length, fill: "#da4453"})
                                        formattedWeek5Data.push({x: name.display_name, y: week5Data.length, fill: "#da4453"})
                                        formattedWeek6Data.push({x: name.display_name, y: week6Data.length, fill: "#da4453"})
                                        formattedWeek7Data.push({x: name.display_name, y: week7Data.length, fill: "#da4453"})
                                        formattedWeek8Data.push({x: name.display_name, y: week8Data.length, fill: "#da4453"})
                                        formattedWeek9Data.push({x: name.display_name, y: week9Data.length, fill: "#da4453"})
                                        formattedWeek10Data.push({x: name.display_name, y: week10Data.length, fill: "#da4453"})
                                        formattedWeek11Data.push({x: name.display_name, y: week11Data.length, fill: "#da4453"})
                                        formattedWeek12Data.push({x: name.display_name, y: week12Data.length, fill: "#da4453"})
                                        return name.display_name
                                    })
                                    this.setState({
                                        user2Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[2] !== undefined) {
                    const getWorkoutInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupContestUserWorkouts?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }
                    getWorkoutInfo()
                        .then((workoutData)=> {
                            const javascriptFormattedDates = workoutData.map(dateCompare => {
                                return new Date(dateCompare.date_created)
                            })
                            const week1Data = []
                            const week2Data = []
                            const week3Data = []
                            const week4Data = []
                            const week5Data = []
                            const week6Data = []
                            const week7Data = []
                            const week8Data = []
                            const week9Data = []
                            const week10Data = []
                            const week11Data = []
                            const week12Data = []
                            const groupWorkoutDateSort = (formatted) => {
                                formatted.map(date => {
                                    if (date < newDate.addDays(7)) {
                                        return week1Data.push(date)
                                    }
                                    if (date >= newDate.addDays(7) && date < newDate.addDays(14)) {
                                        return week2Data.push(date)
                                    }
                                    if (date >= newDate.addDays(14) && date < newDate.addDays(21)) {
                                        return week3Data.push(date)
                                    }
                                    if (date >= newDate.addDays(21) && date < newDate.addDays(28)) {
                                        return week4Data.push(date)
                                    }
                                    if (date >= newDate.addDays(28) && date < newDate.addDays(35)) {
                                        return week5Data.push(date)
                                    }
                                    if (date >= newDate.addDays(35) && date < newDate.addDays(42)) {
                                        return week6Data.push(date)
                                    }
                                    if (date >= newDate.addDays(42) && date < newDate.addDays(49)) {
                                        return week7Data.push(date)
                                    }
                                    if (date >= newDate.addDays(49) && date < newDate.addDays(56)) {
                                        return week8Data.push(date)
                                    }
                                    if (date >= newDate.addDays(56) && date < newDate.addDays(63)) {
                                        return week9Data.push(date)
                                    }
                                    if (date >= newDate.addDays(63) && date < newDate.addDays(70)) {
                                        return week10Data.push(date)
                                    }
                                    if (date >= newDate.addDays(70) && date < newDate.addDays(77)) {
                                        return week11Data.push(date)
                                    }
                                    if (date >= newDate.addDays(77) && date < newDate.addDays(84)) {
                                        return week12Data.push(date)
                                    } else {
                                        return 'No dates in this range'
                                    }
                                })
                            }
                            groupWorkoutDateSort(javascriptFormattedDates)
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        formattedWeek1Data.push({x: name.display_name, y: week1Data.length, fill: "#ffce54"})
                                        formattedWeek2Data.push({x: name.display_name, y: week2Data.length, fill: "#ffce54"})
                                        formattedWeek3Data.push({x: name.display_name, y: week3Data.length, fill: "#ffce54"})
                                        formattedWeek4Data.push({x: name.display_name, y: week4Data.length, fill: "#ffce54"})
                                        formattedWeek5Data.push({x: name.display_name, y: week5Data.length, fill: "#ffce54"})
                                        formattedWeek6Data.push({x: name.display_name, y: week6Data.length, fill: "#ffce54"})
                                        formattedWeek7Data.push({x: name.display_name, y: week7Data.length, fill: "#ffce54"})
                                        formattedWeek8Data.push({x: name.display_name, y: week8Data.length, fill: "#ffce54"})
                                        formattedWeek9Data.push({x: name.display_name, y: week9Data.length, fill: "#ffce54"})
                                        formattedWeek10Data.push({x: name.display_name, y: week10Data.length, fill: "#ffce54"})
                                        formattedWeek11Data.push({x: name.display_name, y: week11Data.length, fill: "#ffce54"})
                                        formattedWeek12Data.push({x: name.display_name, y: week12Data.length, fill: "#ffce54"})
                                        return name.display_name
                                    })
                                    this.setState({
                                        user3Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[3] !== undefined) {
                    const getWorkoutInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupContestUserWorkouts?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }
                    getWorkoutInfo()
                        .then((workoutData)=> {
                            const javascriptFormattedDates = workoutData.map(dateCompare => {
                                return new Date(dateCompare.date_created)
                            })
                            const week1Data = []
                            const week2Data = []
                            const week3Data = []
                            const week4Data = []
                            const week5Data = []
                            const week6Data = []
                            const week7Data = []
                            const week8Data = []
                            const week9Data = []
                            const week10Data = []
                            const week11Data = []
                            const week12Data = []
                            const groupWorkoutDateSort = (formatted) => {
                                formatted.map(date => {
                                    if (date < newDate.addDays(7)) {
                                        return week1Data.push(date)
                                    }
                                    if (date >= newDate.addDays(7) && date < newDate.addDays(14)) {
                                        return week2Data.push(date)
                                    }
                                    if (date >= newDate.addDays(14) && date < newDate.addDays(21)) {
                                        return week3Data.push(date)
                                    }
                                    if (date >= newDate.addDays(21) && date < newDate.addDays(28)) {
                                        return week4Data.push(date)
                                    }
                                    if (date >= newDate.addDays(28) && date < newDate.addDays(35)) {
                                        return week5Data.push(date)
                                    }
                                    if (date >= newDate.addDays(35) && date < newDate.addDays(42)) {
                                        return week6Data.push(date)
                                    }
                                    if (date >= newDate.addDays(42) && date < newDate.addDays(49)) {
                                        return week7Data.push(date)
                                    }
                                    if (date >= newDate.addDays(49) && date < newDate.addDays(56)) {
                                        return week8Data.push(date)
                                    }
                                    if (date >= newDate.addDays(56) && date < newDate.addDays(63)) {
                                        return week9Data.push(date)
                                    }
                                    if (date >= newDate.addDays(63) && date < newDate.addDays(70)) {
                                        return week10Data.push(date)
                                    }
                                    if (date >= newDate.addDays(70) && date < newDate.addDays(77)) {
                                        return week11Data.push(date)
                                    }
                                    if (date >= newDate.addDays(77) && date < newDate.addDays(84)) {
                                        return week12Data.push(date)
                                    } else {
                                        return 'No dates in this range'
                                    }
                                })
                            }
                            groupWorkoutDateSort(javascriptFormattedDates)
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        formattedWeek1Data.push({x: name.display_name, y: week1Data.length, fill: "#48cfad"})
                                        formattedWeek2Data.push({x: name.display_name, y: week2Data.length, fill: "#48cfad"})
                                        formattedWeek3Data.push({x: name.display_name, y: week3Data.length, fill: "#48cfad"})
                                        formattedWeek4Data.push({x: name.display_name, y: week4Data.length, fill: "#48cfad"})
                                        formattedWeek5Data.push({x: name.display_name, y: week5Data.length, fill: "#48cfad"})
                                        formattedWeek6Data.push({x: name.display_name, y: week6Data.length, fill: "#48cfad"})
                                        formattedWeek7Data.push({x: name.display_name, y: week7Data.length, fill: "#48cfad"})
                                        formattedWeek8Data.push({x: name.display_name, y: week8Data.length, fill: "#48cfad"})
                                        formattedWeek9Data.push({x: name.display_name, y: week9Data.length, fill: "#48cfad"})
                                        formattedWeek10Data.push({x: name.display_name, y: week10Data.length, fill: "#48cfad"})
                                        formattedWeek11Data.push({x: name.display_name, y: week11Data.length, fill: "#48cfad"})
                                        formattedWeek12Data.push({x: name.display_name, y: week12Data.length, fill: "#48cfad"})
                                        return name.display_name
                                    })
                                    this.setState({
                                        user4Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[4] !== undefined) {
                    const getWorkoutInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupContestUserWorkouts?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[4]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[4]}`)
                            .then(res => res.json())
                    }
                    getWorkoutInfo()
                        .then((workoutData)=> {
                            const javascriptFormattedDates = workoutData.map(dateCompare => {
                                return new Date(dateCompare.date_created)
                            })
                            const week1Data = []
                            const week2Data = []
                            const week3Data = []
                            const week4Data = []
                            const week5Data = []
                            const week6Data = []
                            const week7Data = []
                            const week8Data = []
                            const week9Data = []
                            const week10Data = []
                            const week11Data = []
                            const week12Data = []
                            const groupWorkoutDateSort = (formatted) => {
                                formatted.map(date => {
                                    if (date < newDate.addDays(7)) {
                                        return week1Data.push(date)
                                    }
                                    if (date >= newDate.addDays(7) && date < newDate.addDays(14)) {
                                        return week2Data.push(date)
                                    }
                                    if (date >= newDate.addDays(14) && date < newDate.addDays(21)) {
                                        return week3Data.push(date)
                                    }
                                    if (date >= newDate.addDays(21) && date < newDate.addDays(28)) {
                                        return week4Data.push(date)
                                    }
                                    if (date >= newDate.addDays(28) && date < newDate.addDays(35)) {
                                        return week5Data.push(date)
                                    }
                                    if (date >= newDate.addDays(35) && date < newDate.addDays(42)) {
                                        return week6Data.push(date)
                                    }
                                    if (date >= newDate.addDays(42) && date < newDate.addDays(49)) {
                                        return week7Data.push(date)
                                    }
                                    if (date >= newDate.addDays(49) && date < newDate.addDays(56)) {
                                        return week8Data.push(date)
                                    }
                                    if (date >= newDate.addDays(56) && date < newDate.addDays(63)) {
                                        return week9Data.push(date)
                                    }
                                    if (date >= newDate.addDays(63) && date < newDate.addDays(70)) {
                                        return week10Data.push(date)
                                    }
                                    if (date >= newDate.addDays(70) && date < newDate.addDays(77)) {
                                        return week11Data.push(date)
                                    }
                                    if (date >= newDate.addDays(77) && date < newDate.addDays(84)) {
                                        return week12Data.push(date)
                                    } else {
                                        return 'No dates in this range'
                                    }
                                })
                            }
                            groupWorkoutDateSort(javascriptFormattedDates)
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        formattedWeek1Data.push({x: name.display_name, y: week1Data.length})
                                        formattedWeek2Data.push({x: name.display_name, y: week2Data.length})
                                        formattedWeek3Data.push({x: name.display_name, y: week3Data.length})
                                        formattedWeek4Data.push({x: name.display_name, y: week4Data.length})
                                        formattedWeek5Data.push({x: name.display_name, y: week5Data.length})
                                        formattedWeek6Data.push({x: name.display_name, y: week6Data.length})
                                        formattedWeek7Data.push({x: name.display_name, y: week7Data.length})
                                        formattedWeek8Data.push({x: name.display_name, y: week8Data.length})
                                        formattedWeek9Data.push({x: name.display_name, y: week9Data.length})
                                        formattedWeek10Data.push({x: name.display_name, y: week10Data.length})
                                        formattedWeek11Data.push({x: name.display_name, y: week11Data.length})
                                        formattedWeek12Data.push({x: name.display_name, y: week12Data.length})
                                        return name.display_name
                                    })
                                    this.setState({
                                        user5Info: contestantName
                                    })
                                })
                        })
                }
                if (this.state.contestants[5] !== undefined) {
                    const getWorkoutInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupContestUserWorkouts?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[5]}`)
                            .then(res => res.json())
                    }
                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[5]}`)
                            .then(res => res.json())
                    }
                    getWorkoutInfo()
                        .then((workoutData)=> {
                            const javascriptFormattedDates = workoutData.map(dateCompare => {
                                return new Date(dateCompare.date_created)
                            })
                            const week1Data = []
                            const week2Data = []
                            const week3Data = []
                            const week4Data = []
                            const week5Data = []
                            const week6Data = []
                            const week7Data = []
                            const week8Data = []
                            const week9Data = []
                            const week10Data = []
                            const week11Data = []
                            const week12Data = []
                            const groupWorkoutDateSort = (formatted) => {
                                formatted.map(date => {
                                    if (date < newDate.addDays(7)) {
                                        return week1Data.push(date)
                                    }
                                    if (date >= newDate.addDays(7) && date < newDate.addDays(14)) {
                                        return week2Data.push(date)
                                    }
                                    if (date >= newDate.addDays(14) && date < newDate.addDays(21)) {
                                        return week3Data.push(date)
                                    }
                                    if (date >= newDate.addDays(21) && date < newDate.addDays(28)) {
                                        return week4Data.push(date)
                                    }
                                    if (date >= newDate.addDays(28) && date < newDate.addDays(35)) {
                                        return week5Data.push(date)
                                    }
                                    if (date >= newDate.addDays(35) && date < newDate.addDays(42)) {
                                        return week6Data.push(date)
                                    }
                                    if (date >= newDate.addDays(42) && date < newDate.addDays(49)) {
                                        return week7Data.push(date)
                                    }
                                    if (date >= newDate.addDays(49) && date < newDate.addDays(56)) {
                                        return week8Data.push(date)
                                    }
                                    if (date >= newDate.addDays(56) && date < newDate.addDays(63)) {
                                        return week9Data.push(date)
                                    }
                                    if (date >= newDate.addDays(63) && date < newDate.addDays(70)) {
                                        return week10Data.push(date)
                                    }
                                    if (date >= newDate.addDays(70) && date < newDate.addDays(77)) {
                                        return week11Data.push(date)
                                    }
                                    if (date >= newDate.addDays(77) && date < newDate.addDays(84)) {
                                        return week12Data.push(date)
                                    } else {
                                        return 'No dates in this range'
                                    }
                                })
                            }
                            groupWorkoutDateSort(javascriptFormattedDates)
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        formattedWeek1Data.push({x: name.display_name, y: week1Data.length})
                                        formattedWeek2Data.push({x: name.display_name, y: week2Data.length})
                                        formattedWeek3Data.push({x: name.display_name, y: week3Data.length})
                                        formattedWeek4Data.push({x: name.display_name, y: week4Data.length})
                                        formattedWeek5Data.push({x: name.display_name, y: week5Data.length})
                                        formattedWeek6Data.push({x: name.display_name, y: week6Data.length})
                                        formattedWeek7Data.push({x: name.display_name, y: week7Data.length})
                                        formattedWeek8Data.push({x: name.display_name, y: week8Data.length})
                                        formattedWeek9Data.push({x: name.display_name, y: week9Data.length})
                                        formattedWeek10Data.push({x: name.display_name, y: week10Data.length})
                                        formattedWeek11Data.push({x: name.display_name, y: week11Data.length})
                                        formattedWeek12Data.push({x: name.display_name, y: week12Data.length})
                                        return name.display_name
                                    })
                                    this.setState({
                                        user6Info: contestantName
                                    })
                                })
                        })
                }

                })
                this.setState({
                    week1Data : formattedWeek1Data,
                    week2Data: formattedWeek2Data,
                    week3Data: formattedWeek3Data,
                    week4Data: formattedWeek4Data,
                    week5Data: formattedWeek5Data,
                    week6Data: formattedWeek6Data,
                    week7Data: formattedWeek7Data,
                    week8Data: formattedWeek8Data,
                    week9Data: formattedWeek9Data,
                    week10Data: formattedWeek10Data,
                    week11Data: formattedWeek11Data,
                    week12Data: formattedWeek12Data,
            })
    }

    render () {

        return (
            <div className='groupWorkout-box-div'>
                <h3>Group Workout Progress</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                        <h5>Week 1</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: {
                                            fill: ({ datum }) => datum.fill,
                                        }
                                    }}
                                    data = {this.state.week1Data}
                                />
                            </VictoryChart>
                        </div>
                    </div>
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h5>Week 2</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: {
                                            fill: ({ datum }) => datum.fill,
                                        }
                                    }}
                                    data = {this.state.week2Data}
                                />
                            </VictoryChart>
                        </div>
                    </div>
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h5>Week 3</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: {
                                            fill: ({ datum }) => datum.fill,
                                        }
                                    }}
                                    data = {this.state.week3Data}
                                />
                            </VictoryChart>
                    </div>
                </div>
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h5>Week 4</h5>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: {
                                            fill: ({ datum }) => datum.fill,
                                        }
                                    }}
                                    data = {this.state.week4Data}
                                />
                            </VictoryChart>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupWorkoutTracking
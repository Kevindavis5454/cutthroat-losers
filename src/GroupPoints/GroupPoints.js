import React from "react";
import "./grouppoints.css"
import config from "../config";

class GroupPoints extends React.Component {

    state= {
        contestants: [],
        user1Name: [],
        user1Info: [],
        user2Name: [],
        user2Info: [],
        user3Name: [],
        user3Info: [],
        user4Name: [],
        user4Info: [],
        user5Name: [],
        user5Info: [],
        user6Name: [],
        user6Info: [],
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
                if (this.state.contestants[0] !== undefined) {
                    const getPoints = () => {
                        return fetch(`${config.API_ENDPOINT}/api/points/totalUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }
                    getPoints()
                        .then((points) => {
                            const formattedPoints = points.map(point => {
                                return parseInt(point.sum)
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo
                                    this.setState({
                                        user1Name: contestantName,
                                        user1Info: formattedPoints
                                    })
                                })
                        })

                }
                if (this.state.contestants[1] !== undefined) {
                    const getPoints = () => {
                        return fetch(`${config.API_ENDPOINT}/api/points/totalUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }
                    getPoints()
                        .then((points) => {
                            const formattedPoints = points.map(point => {
                                return parseInt(point.sum)
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo
                                    this.setState({
                                        user2Name: contestantName,
                                        user2Info: formattedPoints
                                    })
                                })
                        })

                }
                if (this.state.contestants[2] !== undefined) {
                    const getPoints = () => {
                        return fetch(`${config.API_ENDPOINT}/api/points/totalUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }
                    getPoints()
                        .then((points) => {
                            const formattedPoints = points.map(point => {
                                return parseInt(point.sum)
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo
                                    this.setState({
                                        user3Name: contestantName,
                                        user3Info: formattedPoints
                                    })
                                })
                        })

                }
                if (this.state.contestants[3] !== undefined) {
                    const getPoints = () => {
                        return fetch(`${config.API_ENDPOINT}/api/points/totalUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }
                    getPoints()
                        .then((points) => {
                            const formattedPoints = points.map(point => {
                                return parseInt(point.sum)
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    const contestantName = contestantInfo
                                    this.setState({
                                        user4Name: contestantName,
                                        user4Info: formattedPoints
                                    })
                                    })

                        })

                }
                if (this.state.contestants[4] !== undefined) {
                    const getPoints = () => {
                        return fetch(`${config.API_ENDPOINT}/api/points/totalUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[4]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[4]}`)
                            .then(res => res.json())
                    }
                    getPoints()
                        .then((points) => {
                            const formattedPoints = points.map(point => {
                                return parseInt(point.sum)
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    const contestantName =
                                        contestantInfo
                                    this.setState({
                                        user5Name: contestantName,
                                        user5Info: formattedPoints
                                    })
                                })
                        })

                }
                if (this.state.contestants[5] !== undefined) {
                    const getPoints = () => {
                        return fetch(`${config.API_ENDPOINT}/api/points/totalUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[5]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/displayname?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[5]}`)
                            .then(res => res.json())
                    }
                    getPoints()
                        .then((points) => {
                            const formattedPoints = points.map(point => {
                                return parseInt(point.sum)
                            })
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    const contestantName =
                                        contestantInfo.map
                                    this.setState({
                                        user5Name: contestantName,
                                        user6Info: formattedPoints
                                    })
                                })
                        })

                }
            })

    }

    render () {

        return (
            <div className='group-points-div'>
                <h3>Current Group Points</h3>
            <div className="flex-container-workout">
                <div className="flex-cell-workout">
                    <div className="flex-item-workout">
                        <span className='player1'>{this.state.user1Name}</span>
                        Current Points:
                        <span className='points-current player1'>{this.state.user1Info}</span>
                    </div>
                </div>
                <div className="flex-cell-workout">
                    <div className="flex-item-workout">
                        <span className='player2'>{this.state.user2Name}</span>
                        Current Points:
                        <span className='points-current player2'>{this.state.user2Info}</span>
                    </div>
                </div>
                <div className="flex-cell-workout">
                    <div className="flex-item-workout">
                        <span className='player3'>{this.state.user3Name}</span>
                        Current Points:
                        <span className='points-current player3'>{this.state.user3Info}</span>
                    </div>
                </div>
                <div className="flex-cell-workout">
                    <div className="flex-item-workout">
                        <span className='player4'>{this.state.user4Name}</span>
                        Current Points:
                        <span className='points-current player4'>{this.state.user4Info}</span>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default GroupPoints
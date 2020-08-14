import React from 'react'
import config from "../config";
import { VictoryChart, VictoryBar, VictoryAxis} from 'victory'
import './groupgraph.css'


  class GroupGraph extends React.Component {

        state = {
          contestants: [],
            data: [],
            user1Name: [],
            user2Name: [],
            user3Name: [],
            user4Name: [],
      }


    componentDidMount() {

        const getContestants = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUserIds?contest_id=${localStorage.getItem("contest Id")}`)
                .then(res => res.json())
        }

        getContestants()
            .then((contestants) => {
                const chartData =  []
                let contestantIds = contestants.map(user => {
                    return user.user_id
                })
                this.setState({
                    contestants: contestantIds
                })
                if (this.state.contestants[0] !== undefined) {
                    const getUserPoints = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    getUserPoints()
                                .then((userPoints) => {
                                    const formattedPointsStomach = userPoints.map(point => {
                                        return parseInt(point.sum)
                                    })
                                    chartData.push({x: "Contestant 1", y: parseInt(formattedPointsStomach), fill: "#34bf49"})
                                    getContestantInfo()
                                        .then((contestantInfo)=> {
                                            let contestantName = contestantInfo.map(name => {
                                                return name.display_name
                                            })
                                            this.setState({
                                                user1Name: contestantName
                                            })
                                })
                        })

                }
                if (this.state.contestants[1] !== undefined) {
                    const getUserPoints = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }
                    getUserPoints()
                                .then((userPoints) => {
                                    const formattedPointsStomach = userPoints.map(point => {
                                        return parseInt(point.sum)
                                    })
                                    chartData.push({x: "Contestant 2", y: parseInt(formattedPointsStomach), fill: "#da4453"})
                                    getContestantInfo()
                                        .then((contestantInfo)=> {
                                            let contestantName = contestantInfo.map(name => {
                                                return name.display_name
                                            })
                                            this.setState({
                                                user2Name: contestantName
                                            })
                                })
                        })

                }
                if (this.state.contestants[2] !== undefined) {
                    const getUserPoints = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }


                            getUserPoints()
                                .then((userPoints) => {
                                    const formattedPointsStomach = userPoints.map(point => {
                                        return parseInt(point.sum)
                                    })
                                    chartData.push({x: "Contestant 3", y: parseInt(formattedPointsStomach), fill: "#ffce54"})

                                    getContestantInfo()
                                        .then((contestantInfo)=> {
                                            let contestantName = contestantInfo.map(name => {
                                                return name.display_name
                                            })
                                            this.setState({
                                                user3Name: contestantName
                                            })
                                })
                        })

                }
                if (this.state.contestants[3] !== undefined) {
                    const getUserPoints = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }
                    getUserPoints()
                        .then((userPoints) => {
                            const formattedPointsStomach = userPoints.map(point => {
                                return parseInt(point.sum)
                            })
                            chartData.push({x: "Contestant 4", y: parseInt(formattedPointsStomach), fill: "#48cfad"})
                            getContestantInfo()
                                .then((contestantInfo)=> {
                                    let contestantName = contestantInfo.map(name => {
                                        return name.display_name
                                    })
                                    this.setState({
                                        user4Name: contestantName
                                    })
                                })
                        })
                }
                this.setState({
                    data: chartData
                })

            })

    }

    render() {
      return (
          <div className='group-points-tracking-div'>
              <h3>Total Points Acquired</h3>
          <div className="flex-container-workout">
              <div className='flex-cell-workout weight-tracker-single'>
                  <div className='flex-item-workout'>
            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 250}} viewBox="0, 0,  width height" >
                <VictoryBar
                    labels={({ datum }) => datum.y }
                    style={{
                        data: { fill: ({ datum }) => datum.fill },
                        labels: {fill: '#FFFFFF'}
                    }}
                    data = {this.state.data}

                />
                <VictoryAxis
                    dependentAxis
                    label="Points"
                    style={{
                        axisLabel: { fontSize: 16, padding: 32},
                    }}
                />
                <VictoryAxis
                    tickFormat={() => ''}
                    label="Contestants"
                    style={{ axis: { stroke: '#000' },
                        axisLabel: { fontSize: 16, padding: 36},
                        ticks: { stroke: '#000' },
                        tickLabels: { fontSize: 14, padding: 2, angle:45, verticalAnchor: 'middle', textAnchor:'start' }
                    }}

                />
            </VictoryChart>
            <ul>
                <span className='player1'><li>{this.state.user1Name}</li></span>
                <span className='player2'><li>{this.state.user2Name}</li></span>
                <span className='player3'><li>{this.state.user3Name}</li></span>
                <span className='player4'><li>{this.state.user4Name}</li></span>
            </ul>
                  </div>
              </div>
          </div>
          </div>
      );
    }
  }
  
  
export default GroupGraph
import React from "react";
import "./points.css"
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'
import config from "../config";

class Points extends React.Component {

    state = {
        pointsGained: [],
        pointsSpent: [],
        currentPoints: [],
        name: [],
    }

    componentDidMount() {

        function arraySum(i) {
            let sum=0;
            for(let a=0;a<i.length;a++){
                if(typeof i[a]=="number"){
                    sum+=i[a];
                }else if(i[a] instanceof Array){
                    sum+=arraySum(i[a]);
                }
            }
            return sum;
        }

        const pointsGained = []
        const pointsSpent = []

        const getPoints = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/getUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        const getPointsGainedStomach = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedStomach?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        const getPointsGainedWeight = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedWeight?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        const getPointsGainedWorkout = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedWorkout?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        const getPointsGainedBingo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedBingo?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        const getPointsSpentBlock = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsSpentBlock?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        const getPointsSpentSabotage = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsSpentSabotage?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }
        getPoints()
            .then((points) => {
                const formattedPoints = points.map(point => {
                    return parseInt(point.sum)
                })
                this.setState({
                    currentPoints: formattedPoints
                })
            })
        getPointsGainedStomach()
            .then((pointsGainedStomach) => {
                const pointsGainedArray = []
                const formattedPointsStomach = pointsGainedStomach.map(point => {
                    return parseInt(point.sum)
                })
                pointsGainedArray.push(formattedPointsStomach)
                getPointsGainedWeight()
                    .then((pointsGainedWeight) => {
                        const formattedPointsWeight = pointsGainedWeight.map(point => {
                            return parseInt(point.sum)
                        })
                        pointsGainedArray.push(formattedPointsWeight)
                        getPointsGainedWorkout()
                            .then((pointsGainedWorkout) => {
                                const formattedPointsWorkout = pointsGainedWorkout.map(point => {
                                    return parseInt(point.sum)
                                })
                                pointsGainedArray.push(formattedPointsWorkout)
                                getPointsGainedBingo()
                                    .then ((pointsGainedBingo) => {
                                        const formattedPointsBingo = pointsGainedBingo.map(point => {
                                            return parseInt(point.sum)
                                        })
                                        pointsGainedArray.push(formattedPointsBingo)
                                        pointsGained.push(arraySum(pointsGainedArray))
                                        this.setState({
                                            pointsGained: pointsGained
                                        })
                                    })
                            })
                    })

            })
        getPointsSpentBlock()
            .then((pointsSpentBlock) => {
                const pointsSpentArray= []
                const formattedPointsBlock = pointsSpentBlock.map(point => {
                    return parseInt(point.sum)
                })
                pointsSpentArray.push(formattedPointsBlock)
                getPointsSpentSabotage()
                    .then((pointsSpentSabotage) => {
                        const formattedPointsSabotage = pointsSpentSabotage.map(point => {
                            return parseInt(point.sum)
                        })
                        pointsSpentArray.push(formattedPointsSabotage)
                        pointsSpent.push(arraySum(pointsSpentArray))
                        this.setState({
                            pointsSpent: pointsSpent
                        })

                    })
            })
        const getUserInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/weightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        getUserInfo()
            .then(([weightStats]) => {
                this.setState({
                    name: weightStats.display_name
                })

            })


    }

    render () {
        return (
            <div className='personal-points-div'>
                <h3 className='player1'>{this.state.name}'s Points</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout personal-points'>
                        <div className='flex-item-workout'>
                            <p className='player1 title'>Current Points: <span>{this.state.currentPoints}</span></p>
                            <p className='points-gained title'>Points Gained: <span>{this.state.pointsGained}</span></p>
                            <p className='points-spent title'>Points Spent: <span>{this.state.pointsSpent}</span></p>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: -200 }} maxDomain={{ y: 200}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    //`Weight: ${datum.y} Date: ${datum.x}`
                                    labels={({ datum }) =>`${datum.x}: ${datum.y}`}
                                    style={{
                                        data: {
                                            fill: ({ datum }) => datum.fill,
                                        },
                                        labels: {fill: '#FFFFFF', angle:45}
                                    }}
                                    data = {[
                                        {x: "Points Gained", y: this.state.pointsGained, fill: '#bc4123'},
                                        {x: "Points Spent", y: this.state.pointsSpent, padding: 80, fill: '#ffce54'},
                                        {x: "Current Points", y: this.state.currentPoints, fill:'#34bf49'},
                                    ]}

                                />
                                <VictoryAxis
                                    dependentAxis
                                    label="Weight"
                                    style={{
                                        axisLabel: { fontSize: 16, padding: 32},
                                    }}
                                />
                                <VictoryAxis
                                    label='Date'
                                    tickFormat={() => ''}
                                    style={{ axis: { stroke: '#000' },
                                        axisLabel: { fontSize: 16, padding: 120},

                                    }}


                                    //data: {
                                    //         fill: ({ datum }) => datum.fill,
                                    //       }
                                />
                            </VictoryChart>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Points
import React from 'react'
import config from "../config";
import { VictoryChart, VictoryStack, VictoryBar, VictoryAxis} from 'victory'


  class GroupGraph extends React.Component {

        state = {
          contestants: [],
            stomach: [],
            weight: [],
            workout: [],
            bingo: [],
            user1Name: [],
            user2Name: [],
            user3Name: [],
            user4Name: [],
          dataSet : [],
      }


    componentDidMount() {

        const dataSetArray = []
        const stomachArray = []
        const weightArray = []
        const workoutArray = []
        const bingoArray = []

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
                    const getPointsGainedStomach = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedStomach?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedWeight = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedWeight?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedWorkout = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedWorkout?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedBingo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedBingo?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[0]}`)
                            .then(res => res.json())
                    }

                    getContestantInfo()
                        .then((contestantInfo)=> {
                            let contestantName = contestantInfo.map(name => {
                                return name.display_name
                            })
                            this.setState({
                                user1Name: contestantName.toString()
                            })
                            getPointsGainedStomach()
                                .then((pointsGainedStomach) => {
                                    const formattedPointsStomach = pointsGainedStomach.map(point => {
                                        return parseInt(point.sum)
                                    })
                                    //1 integer value STOMACH
                                    stomachArray.push({x: contestantName.toString(), y: parseInt(formattedPointsStomach)})
                                    getPointsGainedWeight()
                                        .then((pointsGainedWeight) => {
                                            const formattedPointsWeight = pointsGainedWeight.map(point => {
                                                return parseInt(point.sum)
                                            })
                                            //1 integer value WEIGHT
                                            weightArray.push({x: contestantName.toString(), y: parseInt(formattedPointsWeight)})
                                            getPointsGainedWorkout()
                                                .then((pointsGainedWorkout) => {
                                                    const formattedPointsWorkout = pointsGainedWorkout.map(point => {
                                                        return parseInt(point.sum)
                                                    })
                                                    //1 integer value WORKOUT
                                                    workoutArray.push({x: contestantName.toString(), y: parseInt(formattedPointsWorkout)})
                                                    getPointsGainedBingo()
                                                        .then((pointsGainedBingo) => {
                                                            const formattedPointsBingo = pointsGainedBingo.map(point => {
                                                                return parseInt(point.sum)
                                                            })
                                                            //1 integer value BINGO
                                                            bingoArray.push({x: contestantName.toString(), y: parseInt(formattedPointsBingo)})
                                                        })
                                                })
                                        })

                                })
                        })

                }
                if (this.state.contestants[1] !== undefined) {
                    const getPointsGainedStomach = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedStomach?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedWeight = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedWeight?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedWorkout = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedWorkout?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedBingo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedBingo?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[1]}`)
                            .then(res => res.json())
                    }

                    getContestantInfo()
                        .then((contestantInfo)=> {
                            let contestantName = contestantInfo.map(name => {
                                return name.display_name
                            })
                            this.setState({
                                user2Name: contestantName.toString()
                            })
                            getPointsGainedStomach()
                                .then((pointsGainedStomach) => {
                                    const formattedPointsStomach = pointsGainedStomach.map(point => {
                                        return parseInt(point.sum)
                                    })
                                    //1 integer value STOMACH
                                    stomachArray.push({x: contestantName.toString(), y: parseInt(formattedPointsStomach)})
                                    getPointsGainedWeight()
                                        .then((pointsGainedWeight) => {
                                            const formattedPointsWeight = pointsGainedWeight.map(point => {
                                                return parseInt(point.sum)
                                            })
                                            //1 integer value WEIGHT
                                            weightArray.push({x: contestantName.toString(), y: parseInt(formattedPointsWeight)})
                                            getPointsGainedWorkout()
                                                .then((pointsGainedWorkout) => {
                                                    const formattedPointsWorkout = pointsGainedWorkout.map(point => {
                                                        return parseInt(point.sum)
                                                    })
                                                    //1 integer value WORKOUT
                                                    workoutArray.push({x: contestantName.toString(), y: parseInt(formattedPointsWorkout)})
                                                    getPointsGainedBingo()
                                                        .then((pointsGainedBingo) => {
                                                            const formattedPointsBingo = pointsGainedBingo.map(point => {
                                                                return parseInt(point.sum)
                                                            })
                                                            //1 integer value BINGO
                                                            bingoArray.push({x: contestantName.toString(), y: parseInt(formattedPointsBingo)})
                                                        })
                                                })
                                        })

                                })
                        })

                }
                if (this.state.contestants[2] !== undefined) {
                    const getPointsGainedStomach = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedStomach?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedWeight = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedWeight?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedWorkout = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedWorkout?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedBingo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedBingo?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[2]}`)
                            .then(res => res.json())
                    }

                    getContestantInfo()
                        .then((contestantInfo)=> {
                            let contestantName = contestantInfo.map(name => {
                                return name.display_name
                            })
                            this.setState({
                                user3Name: contestantName.toString()
                            })
                            getPointsGainedStomach()
                                .then((pointsGainedStomach) => {
                                    const formattedPointsStomach = pointsGainedStomach.map(point => {
                                        return parseInt(point.sum)
                                    })
                                    //1 integer value STOMACH
                                    stomachArray.push({x: contestantName.toString(), y: parseInt(formattedPointsStomach)})
                                    getPointsGainedWeight()
                                        .then((pointsGainedWeight) => {
                                            const formattedPointsWeight = pointsGainedWeight.map(point => {
                                                return parseInt(point.sum)
                                            })
                                            //1 integer value WEIGHT
                                            weightArray.push({x: contestantName.toString(), y: parseInt(formattedPointsWeight)})
                                            getPointsGainedWorkout()
                                                .then((pointsGainedWorkout) => {
                                                    const formattedPointsWorkout = pointsGainedWorkout.map(point => {
                                                        return parseInt(point.sum)
                                                    })
                                                    //1 integer value WORKOUT
                                                    workoutArray.push({x: contestantName.toString(), y: parseInt(formattedPointsWorkout)})
                                                    getPointsGainedBingo()
                                                        .then((pointsGainedBingo) => {
                                                            const formattedPointsBingo = pointsGainedBingo.map(point => {
                                                                return parseInt(point.sum)
                                                            })
                                                            //1 integer value BINGO
                                                            bingoArray.push({x: contestantName.toString(), y: parseInt(formattedPointsBingo)})
                                                        })
                                                })
                                        })

                                })
                        })

                }
                if (this.state.contestants[3] !== undefined) {
                    const getPointsGainedStomach = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedStomach?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedWeight = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedWeight?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedWorkout = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedWorkout?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }

                    const getPointsGainedBingo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/getPointsGainedBingo?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }

                    const getContestantInfo = () => {
                        return fetch(`${config.API_ENDPOINT}/api/contestInfo/groupWeightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${this.state.contestants[3]}`)
                            .then(res => res.json())
                    }

                    getContestantInfo()
                        .then((contestantInfo)=> {
                            let contestantName = contestantInfo.map(name => {
                                return name.display_name
                            })
                            this.setState({
                                user4Name: contestantName.toString()
                            })
                            getPointsGainedStomach()
                                .then((pointsGainedStomach) => {
                                    const formattedPointsStomach = pointsGainedStomach.map(point => {
                                        return parseInt(point.sum)
                                    })
                                    //1 integer value STOMACH
                                    stomachArray.push({x: contestantName.toString(), y: parseInt(formattedPointsStomach)})
                                    getPointsGainedWeight()
                                        .then((pointsGainedWeight) => {
                                            const formattedPointsWeight = pointsGainedWeight.map(point => {
                                                return parseInt(point.sum)
                                            })
                                            //1 integer value WEIGHT
                                            weightArray.push({x: contestantName.toString(), y: parseInt(formattedPointsWeight)})
                                            getPointsGainedWorkout()
                                                .then((pointsGainedWorkout) => {
                                                    const formattedPointsWorkout = pointsGainedWorkout.map(point => {
                                                        return parseInt(point.sum)
                                                    })
                                                    //1 integer value WORKOUT
                                                    workoutArray.push({x: contestantName.toString(), y: parseInt(formattedPointsWorkout)})
                                                    getPointsGainedBingo()
                                                        .then((pointsGainedBingo) => {
                                                            const formattedPointsBingo = pointsGainedBingo.map(point => {
                                                                return parseInt(point.sum)
                                                            })
                                                            //1 integer value BINGO
                                                            bingoArray.push({x: contestantName.toString(), y: parseInt(formattedPointsBingo)})
                                                        })
                                                })
                                        })

                                })
                        })

                }

                dataSetArray.push(stomachArray)
                dataSetArray.push(weightArray)
                dataSetArray.push(workoutArray)
                dataSetArray.push(bingoArray)
                this.setState({
                    dataSet: dataSetArray
                })
            })

    }

    render() {
            console.log(this.state.dataSet, 'data set state')
        const dataSetVar = this.state.dataSet

      return (

        <div>
        <VictoryChart height={400} width={400}
                      domainPadding={{ x: 30, y: 20 }}

                      viewBox="0, 0, width, height"
        >
            <VictoryStack
              colorScale={["black", "blue", "red", "yellow"]}
            >
                {dataSetVar.map((data, index) => {
                    return <VictoryBar data={data} key={index}/>;
                })}

            </VictoryStack>
            {/*<VictoryAxis
                dependentAxis
                label="Points"
            />
            <VictoryAxis
                label='Contestant'
                tickValues={[this.state.user1Name.toString(), this.state.user2Name.toString(), this.state.user3Name.toString(), this.state.user4Name.toString()]}
                tickFormat={[this.state.user1Name.toString(), this.state.user2Name.toString(), this.state.user3Name.toString(), this.state.user4Name.toString()]}

            />*/}
        </VictoryChart>
      </div>
      );
    }
  }
  
  
export default GroupGraph
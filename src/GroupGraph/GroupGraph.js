import React from 'react'
import config from "../config";
import { VictoryChart, VictoryStack, VictoryBar, VictoryAxis} from 'victory'


  class GroupGraph extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dataSet : [
          [
            // contestant 1
              { x: "Weight", y: 1 },
              { x: "Stomach", y: 3 },
              { x: "Workout", y: 2 }
          ],
          [
            // contestant 2
              { x: "Weight", y: 1 },
              { x: "Stomach", y: 3 },
              { x: "Workout", y: 2 }
          ],
          [
            // contestant 3
              { x: "Weight", y: 1 },
              { x: "Stomach", y: 3 },
              { x: "Workout", y: 2 }
          ],
          [
            // contestant 4
              { x: "Weight", y: 2 },
              { x: "Stomach", y: 4 },
              { x: "Workout", y: 5 }
          ]
        ],
        bingoPointsData: [],
      };
    }

    componentDidMount() {

      const getContestants = () => {
        return fetch(`${config.API_ENDPOINT}/api/contest_to_user?contest_id=${localStorage.getItem("contest Id")}`)
            .then(res => res.json())
    }

    async function getContestantIds() {
      return await Promise.all([getContestants()])
  }

      const getWeightPointsInfo = (user_id) => {
        return fetch(`${config.API_ENDPOINT}/api/points/weight?user_id=${user_id}`)
            .then(res => res.json())
    }
    const getStomachPointsInfo = (user_id) => {
      return fetch(`${config.API_ENDPOINT}/api/points/stomach?user_id=${user_id}`)
          .then(res => res.json())
  }
  const getWorkoutPointsInfo = (user_id) => {
    return fetch(`${config.API_ENDPOINT}/api/points/workout?user_id=${user_id}`)
        .then(res => res.json())
}

    async function getWeightPointStats(user_id) {
        return await Promise.all([getWeightPointsInfo(user_id)])
    }
    async function getStomachPointStats(user_id) {
      return await Promise.all([getStomachPointsInfo(user_id)])
  }
  async function getWorkoutPointStats(user_id) {
    return await Promise.all([getWorkoutPointsInfo(user_id)])
}


    getContestantIds()
      .then(([results]) => {
        const weightPointsData = []
        const stomachPointsData = []
        const workoutPointsData = []
        const contestantData0 = []
        const contestantData1 = []
        const contestantData2 = []
        const contestantData3 = []
        const contestantData= [[],[],[],[]]
        results.forEach(user => {
          getWeightPointStats(user.user_id)
            .then(([results]) => {
              weightPointsData.push({ x: 'Weight', y: results[0].sum})
                weightPointsData.forEach(function(data, index) {
                    if (index === 0) {

                    }

                })
                console.log(contestantData0, "contestant data 0")
            })
            })
        results.forEach(user => {
          getStomachPointStats(user.user_id)
            .then(([results]) => {
              stomachPointsData.push({ x: 'Stomach', y: results[0].sum })
            })
        })
        results.forEach(user => {
          getWorkoutPointStats(user.user_id)
            .then(([results]) => {
              workoutPointsData.push({ x: 'Workout', y: results[0].sum })
            })
        })
        })
            
      }
    

    render() {
      const dataset = this.state.dataSet;
      return (
        <div>
        <VictoryChart height={400} width={400}
          domainPadding={{ x: 30, y: 20 }}
        >
            <VictoryStack
              colorScale={["black", "blue", "tomato"]}
            >
              {dataset.map((data, i) => {
                return <VictoryBar data={data} key={i}/>;
              })}
            </VictoryStack>
            <VictoryAxis dependentAxis
              tickFormat={(tick) => `${tick}`}
            />
            <VictoryAxis
              tickFormat={["Weight", "Stomach", "Workout"]}
            />
        </VictoryChart>
      </div>
      );
    }
  }
  
  
export default GroupGraph
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
              { x: "Bingo", y: 2 },
              { x: "Stomach", y: 3 },
              { x: "Workout", y: 2 },
              { x: "Admin", y: 2 }
          ],
          [
            // contestant 2
              { x: "Weight", y: 1 },
              { x: "Bingo", y: 2 },
              { x: "Stomach", y: 3 },
              { x: "Workout", y: 2 },
              { x: "Admin", y: 2 }
          ],
          [
            // contestant 3
              { x: "Weight", y: 1 },
              { x: "Bingo", y: 2 },
              { x: "Stomach", y: 3 },
              { x: "Workout", y: 2 },
              { x: "Admin", y: 2 }
          ],
          [
            // contestant 4
              { x: "Weight", y: 2 },
              { x: "Bingo", y: 3 },
              { x: "Stomach", y: 4 },
              { x: "Workout", y: 5 },
              { x: "Admin", y: 2 }
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

      const getBingoPointsInfo = (user_id) => {
        return fetch(`${config.API_ENDPOINT}/api/points/bingo?user_id=${user_id}`)
            .then(res => res.json())
    }

    async function getBingoPointStats(user_id) {
        return await Promise.all([getBingoPointsInfo(user_id)])
    }


    getContestantIds()
      .then(([results]) => {
        const bingoPointsData = []
        results.forEach(user => {
          getBingoPointStats(user.user_id)
            .then(([results]) => {
              bingoPointsData.push(results)
            })
            })
        this.setState({
          bingoPointsData: bingoPointsData
        })
        console.log(this.state.bingoPointsData)
        })


      }
    

    render() {
      const dataset = this.state.dataSet;
      console.log(dataset, "dataset")
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
              tickFormat={["Weight", "Bingo", "Stomach", "Workout", "Admin"]}
            />
        </VictoryChart>
      </div>
      );
    }
  }
  
  
export default GroupGraph
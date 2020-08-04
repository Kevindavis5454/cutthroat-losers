import React from 'react'
import config from "../config";
import { VictoryChart, VictoryTheme, VictoryGroup, VictoryArea, VictoryPolarAxis, VictoryLabel} from 'victory'

const characterData = [
    { Weight: 7, Bingo: 15, Measurements: 1, Workouts: 3, Spent: 15 },
    { Weight: 5, Bingo: 7, Measurements: 3, Workouts: 10, Spent: 5 },
    { Weight: 3, Bingo: 10, Measurements: 7, Workouts:7, Spent: 10 },
    { Weight: 8, Bingo: 22, Measurements: 4, Workouts:2, Spent: 16 }

  ];
  
  class GroupGraph extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: this.processData(characterData),
        maxima: this.getMaxima(characterData),
        pointsData: [],
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

      const getPointsInfo = (user_id) => {
        return fetch(`${config.API_ENDPOINT}/api/points?user_id=${user_id}`)
            .then(res => res.json())
    }

    async function getPointStats(user_id) {
        return await Promise.all([getPointsInfo(user_id)])
    }

    getContestantIds()
      .then(([results]) => {
        const pointsData = []
        results.forEach(user => {
          getPointStats(user.user_id)
            .then(([results]) => {
              pointsData.push(results)
            })
            })
        this.setState({
          pointsData: pointsData
        })
        console.log(this.state.pointsData)
        })
      }
    

    // getPointStats()
    //     .then(([results]) => {
    //         this.setState({
    //             pointsData: results
    //         })
    //         console.log(this.state.pointsData, "points data in state")
    //     })

  
    getMaxima(data) {
      const groupedData = Object.keys(data[0]).reduce((memo, key) => {
        memo[key] = data.map((d) => d[key]);
        return memo;
      }, {});
      return Object.keys(groupedData).reduce((memo, key) => {
        memo[key] = Math.max(...groupedData[key]);
        return memo;
      }, {});
    }
  
    processData(data) {
      const maxByGroup = this.getMaxima(data);
      const makeDataArray = (d) => {
        return Object.keys(d).map((key) => {
          return { x: key, y: d[key] / maxByGroup[key] };
        });
      };
      return data.map((datum) => makeDataArray(datum));
    }
  
    render() {
      return (
        <VictoryChart polar
          theme={VictoryTheme.material}
          domain={{ y: [ 0, 1 ] }}
        >
          <VictoryGroup colorScale={["#34bf49", "#da4453", "#ffce54", "#48cfad"]}
            style={{ data: { fillOpacity: 0.2, strokeWidth: 2 }}}
          >
            {this.state.data.map((data, i) => {
              return <VictoryArea key={i} data={data}
              />;
            })}
          </VictoryGroup>
        {
          Object.keys(this.state.maxima).map((key, i) => {
            return (
              <VictoryPolarAxis key={i} dependentAxis
                style={{
                  axisLabel: { fill: "white", padding: 10},
                  axis: { stroke: "none" },
                  grid: { stroke: "white", strokeWidth: 0.25, opacity: 0.5 },
                  tickLabels: { fontSize: 15, padding: 5, fill: "white" }
                }}
                tickLabelComponent={
                  <VictoryLabel labelPlacement="vertical"/>
                }
                labelPlacement="perpendicular"

                axisValue={i + 1} label={key}
                tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
                tickValues={[0.25, 0.5, 0.75]}
              />
            );
          })
        }
          <VictoryPolarAxis
            labelPlacement="parallel"
            tickFormat={() => ""}
            style={{
              axis: { stroke: "none" },
              grid: { stroke: "white", opacity: 0.5 }
            }}
          />
  
        </VictoryChart>
      );
    }
  }
  
  
export default GroupGraph
import React from 'react'
import './progresschart.css'
import {VictoryPie, VictoryAnimation, VictoryLabel} from 'victory'
import config from "../config";
import moment from "moment"

class ProgressChart extends React.Component {
    constructor() {
        super();
        this.state = {
          percent: 55, 
          data: this.getData(0),
          startDate: '',
          endDate: '',
        };
      }
    
      componentDidMount() {

      function getContestDates () {
          return Promise.all([getContest()])
      }

      const getContest = () => {
          return fetch(`${config.API_ENDPOINT}/api/contests/${localStorage.getItem("contest Id")}`)
              .then(res => res.json())
      }

      getContestDates()
        .then(results => {
          console.log(results)
          let startDate = moment(results[0][0].date_start)
          this.setState({
            startDate: startDate.format("MMM Do YYYY")
          })
          console.log(this.state.startDate, "start Date")
          let endDate = moment(results[0][0].date_end)
          this.setState({
            endDate: endDate.format("MMM Do YYYY")
          })
          let todaysDate = moment()

          let totalTime = endDate.diff(startDate, 'days')
          let currentTime = todaysDate.diff(startDate, 'days')
          
          this.setState({
            percent: ((currentTime/totalTime)*100)
          })
        })


        let percent = 25;
        this.setStateInterval = window.setInterval(() => {
          percent = this.state.percent;
          percent = (percent > 100) ? 0 : percent;
          this.setState({
            percent, data: this.getData(percent)
          });
        }, 1000);
      }
    
      componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
      }
    
      getData(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
      }
    
      render() {
        return (
          <div className='progress-contest-div'>
              <h3>Contest Completion</h3>
        <span>Contest Start Date: {this.state.startDate}</span>
        <span>Contest Completion Date: {this.state.endDate}</span>
            <svg viewBox="0 0 400 400" width="100%" height="100%">
              <VictoryPie
                standalone={false}
                animate={{ duration: 1000 }}
                width={400} height={400}
                data={this.state.data}
                innerRadius={120}
                cornerRadius={25}
                labels={() => null}
                style={{
                  data: { fill: ({ datum }) => {
                    const color = datum.y > 50 ? "green" : "red";
                    return datum.x === 1 ? color : "transparent";
                  }
                  }
                }}
              />
              <VictoryAnimation duration={1000} data={this.state}>
                {(newProps) => {
                  return (
                    <VictoryLabel
                      textAnchor="middle" verticalAnchor="middle"
                      x={200} y={200}
                      text={`${Math.round(newProps.percent)}%`}
                      style={{ fontSize: 45 }}
                    />
                  );
                }}
              </VictoryAnimation>
            </svg>
          </div>
        );
      }
    }
export default ProgressChart
import React from "react";
import '../ProgressChart/progresschart.css'
import {VictoryPie, VictoryAnimation, VictoryLabel} from 'victory'
import config from "../config";


class ContestantCompletion extends React.Component {

    state = {
            percent: 55,
            data: this.getData(0),
            startingWeight: [],
        };

    componentDidMount() {


        const getContest = () => {
                return fetch(`${config.API_ENDPOINT}/api/contestInfo/weightProgress?user_id=${this.props.user_id}`)
                    .then(res => res.json())
            }

            getContest()
                .then((weightResults) => {
                    const totalWeightToLose = []
                    const totalWeightLost = []
                    const startWeight = weightResults.map(weight => {
                        return parseInt(weight.weight)
                    })
                    totalWeightToLose.push(startWeight - this.props.goal)
                    totalWeightLost.push(startWeight - this.props.weight)

                    this.setState({
                        percent: ((totalWeightLost/totalWeightToLose)*100),
                        startingWeight: startWeight
                    })

                })

        let percent = 25;
        this.setStateInterval = window.setTimeout(() => {
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

    render () {

        return (
            <div className="flex-container contestant">
                <div className="flex-cell contestant-completion">
                    <div className="flex-item contestant">
                        <div>
                            <div className='progress-contest-div'>
                                <span>Starting Weight: {this.state.startingWeight}</span>
                                <span>Current Weight: {this.props.weight}</span>
                                <span>Goal Weight: {this.props.goal}</span>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContestantCompletion
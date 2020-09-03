import React from "react";
import "./points.css"
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'
import config from "../config";

class Points extends React.Component {

    state = {
        currentPoints: [],
        name: [],
    }

    componentDidMount() {

        const getPoints = () => {
            return fetch(`${config.API_ENDPOINT}/api/points/totalUserPoints?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
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
        const getUserInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/weightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        getUserInfo()
            .then(([weightStats]) => {
                this.setState({
                    name: weightStats.display_name
                })

            })


    }
    renderPlayername = () => {
        if (this.state.name == localStorage.getItem("player1")) {
            return "player1"
        }
        if (this.state.name == localStorage.getItem("player2")) {
            return "player2"
        }
        if (this.state.name == localStorage.getItem("player3")) {
            return "player3"
        }
        if (this.state.name == localStorage.getItem("player4")) {
            return "player4"
        }
    }

    render () {
        return (
            <div className='personal-points-div'>
                <h3 className={this.renderPlayername()}>{this.state.name}'s Points</h3>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout point-tracker-full'>
                        <div className='flex-item-workout'>
                            <div className="points-single">
                            <span className={`points-current ${this.renderPlayername()}`}>{this.state.currentPoints}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Points
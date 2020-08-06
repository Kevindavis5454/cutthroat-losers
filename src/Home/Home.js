import React from "react";
import './home.css'
import ProgressChart from '../ProgressChart/ProgressChart'
import GroupGraph from "../GroupGraph/GroupGraph";
import config from "../config";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contestants: [],
        }
        this.renderContestants = this.renderContestants.bind(this)
    }

    componentDidMount() {
        const getContestantInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/sidebarStats?contest_id=${localStorage.getItem("contest Id")}`)
                .then(res => res.json())
        }
      
        async function getContestantStats() {
            return await Promise.all([getContestantInfo()])
        }

        getContestantStats()
            .then(([results]) => {
                const contestants = []
                results.map(user => {
                    return contestants.push(user.display_name)
                })
                this.setState({
                    contestants: contestants
                })
            })
    }

    renderContestants = () => {
        const contestants =  this.state.contestants.map(function(contestant, index) {
             return (
             <span key={index} className={"player" + (index + 1)}><li>{contestant}</li></span>
        )})
        return contestants
    }

    render () {


        return (
            <div className="home-container">
                <div className="flex-container">
                    <div className="flex-cell">
                        <div className="flex-item">
                            <div className="flex-container-workout">
                                <div className='flex-cell-workout admin-cell'>
                                    <div className='flex-item-workout'>
                                        <div className="home-progress-div">
                                            <ProgressChart/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <div className="flex-container-workout">
                                <div className='flex-cell-workout admin-cell'>
                                    <div className='flex-item-workout'>
                                        <div className="home-graph-div">
                                            <GroupGraph />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='player-labels'>
                                <h3>Group Points Acquired</h3>
                                <ul>
                                    {this.renderContestants()}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <h3>More stuff</h3>
                        </div>
                    </div>
                    <div className="flex-cell">
                        <div className="flex-item">
                            <h3>More More Stuff</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
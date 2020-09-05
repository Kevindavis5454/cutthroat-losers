import React from "react";
import config from "../config";

class AdminPointAssignMeasurement extends React.Component {

    handleFetchPostPoints = (postBody, placement) => {
        fetch(`${config.API_ENDPOINT}/api/points/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(postBody),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                else {
                    alert(`Your ${placement} Points have been recorded.`)
                }
            })
            .catch(error => {
                console.error({error})
            })
    }

    handlePointAssignment = (placement, user_id, contest_id, category) => {
        if ( placement === '1st Place') {
            const postBody = {
                contest_id: contest_id,
                user_id: user_id,
                category: category,
                points: 7,
                description: 'Placement Points',
                win_id: 2,
            }
            this.handleFetchPostPoints(postBody, placement)
        }
        if ( placement === '2nd Place') {
            const postBody = {
                contest_id: contest_id,
                user_id: user_id,
                category: category,
                points: 5,
                description: 'Placement Points',
                win_id: 2,
            }
            this.handleFetchPostPoints(postBody, placement)
        }
        if ( placement === '3rd Place') {
            const postBody = {
                contest_id: contest_id,
                user_id: user_id,
                category: category,
                points: 3,
                description: 'Placement Points',
                win_id: 2,
            }
            this.handleFetchPostPoints(postBody, placement)
        }
        if ( placement === '4th Place') {
            const postBody = {
                contest_id: contest_id,
                user_id: user_id,
                category: category,
                points: 1,
                description: 'Placement Points',
                win_id: 2,
            }
            this.handleFetchPostPoints(postBody, placement)
        }

    }

    handleMeasurementsPointsSubmit = e => {
        e.preventDefault()
        const getContestId = parseInt(localStorage.getItem("contest Id"))
        const getCategory = "stomach"
       const user1 = () => {
          let selectedElement = document.getElementById('user1SelectMeasurement').value
           return this.handlePointAssignment(selectedElement, this.props.user1Id, getContestId, getCategory)
        }
        const user2 = () => {
            let selectedElement = document.getElementById('user2SelectMeasurement').value
            return this.handlePointAssignment(selectedElement, this.props.user2Id, getContestId, getCategory)
        }
        const user3 = () => {
            let selectedElement = document.getElementById('user3SelectMeasurement').value
            return this.handlePointAssignment(selectedElement, this.props.user3Id, getContestId, getCategory)
        }
        const user4 = () => {
            let selectedElement = document.getElementById('user4SelectMeasurement').value
            return this.handlePointAssignment(selectedElement, this.props.user4Id, getContestId, getCategory)
        }
        user1()
        user2()
        user3()
        user4()
    }

    handlePercentCalc = (current, prev) => {
        let weight = prev - current
        return Math.round(((weight / prev) * 100) * 100) / 100;
    }

    render () {

        return (
            <div className='groupWeightPointsBox'>
                <h3>Calculate Weekly Measurement Points</h3>
                <div className='weight-calc-button'>
                    <p>Assign rankings and press button to assign Points</p>
                    <button onClick={this.handleMeasurementsPointsSubmit} className='glow-on-hover' name='' id=''>Calculate Points</button>
                </div>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout weight-point-calc'>
                        <div className='flex-item-workout'>
                            <form className='user1Div cont1'>
                                <div className='divideDiv1'>
                                <span className='player1'>{this.props.user1Name}:</span>
                                <span>{this.props.user1PrevMeasurementDate}: {this.props.user1PrevMeasurement} </span>
                                <span>{this.props.user1CurrentMeasurementDate}: {this.props.user1CurrentMeasurement} </span>
                                </div>
                                <div className='divideDiv2'>
                                <span>Percent Lost: <span className='player1'>{this.handlePercentCalc(this.props.user1CurrentMeasurement, this.props.user1PrevMeasurement)}%</span></span>
                                    <br></br>
                                    <select id='user1SelectMeasurement' defaultValue='Not Selected'>
                                        <option value='Not Selected'></option>
                                        <option value='1st Place'>1st Place</option>
                                        <option value='2nd Place'>2nd Place</option>
                                        <option value='3rd Place'>3rd Place</option>
                                        <option value='4th Place'>4th Place</option>
                                    </select>
                                </div>
                            </form>
                            <form className='user2Div cont2'>
                                <div className='divideDiv1'>
                                <span className='player2'>{this.props.user2Name}:</span>
                                <span>{this.props.user2PrevMeasurementDate}: {this.props.user2PrevMeasurement}</span>
                                <span>{this.props.user2CurrentMeasurementDate}: {this.props.user2CurrentMeasurement}</span>
                                </div>
                                <div className='divideDiv2'>
                                <span>Percent Lost: <span className='player2'>{this.handlePercentCalc(this.props.user2CurrentMeasurement, this.props.user2PrevMeasurement)}%</span></span>
                                    <br></br>
                                    <select id='user2SelectMeasurement' defaultValue='Not Selected'>
                                        <option value='Not Selected'></option>
                                        <option value='1st Place'>1st Place</option>
                                        <option value='2nd Place'>2nd Place</option>
                                        <option value='3rd Place'>3rd Place</option>
                                        <option value='4th Place'>4th Place</option>
                                    </select>
                                </div>
                            </form>
                            <form className='user3Div cont3'>
                                <div className='divideDiv1'>
                                <span className='player3'>{this.props.user3Name}:</span>
                                <span>{this.props.user3PrevMeasurementDate}: {this.props.user3PrevMeasurement}</span>
                                <span>{this.props.user3CurrentMeasurementDate}: {this.props.user3CurrentMeasurement}</span>
                                </div>
                                <div className='divideDiv2'>
                                    <span>Percent Lost: <span className='player3'>{this.handlePercentCalc(this.props.user3CurrentMeasurement, this.props.user3PrevMeasurement)}%</span></span>
                                    <br></br>
                                    <select id='user3SelectMeasurement' defaultValue='Not Selected'>
                                        <option value='Not Selected'></option>
                                        <option value='1st Place'>1st Place</option>
                                        <option value='2nd Place'>2nd Place</option>
                                        <option value='3rd Place'>3rd Place</option>
                                        <option value='4th Place'>4th Place</option>
                                    </select>
                                </div>
                            </form>
                            <form className='user4Div cont4'>
                                <div className='divideDiv1'>
                                <span className='player4'>{this.props.user4Name}:</span>
                                <span>{this.props.user4PrevMeasurementDate}: {this.props.user4PrevMeasurement} </span>
                                <span>{this.props.user4CurrentMeasurementDate}: {this.props.user4CurrentMeasurement} </span>
                                </div>
                                <div className='divideDiv2'>
                                <span>Percent Lost: <span className='player4'>{this.handlePercentCalc(this.props.user4CurrentMeasurement, this.props.user4PrevMeasurement)}%</span></span>
                                    <br></br>
                                    <select id='user4SelectMeasurement' defaultValue='Not Selected'>
                                        <option value='Not Selected'></option>
                                        <option value='1st Place'>1st Place</option>
                                        <option value='2nd Place'>2nd Place</option>
                                        <option value='3rd Place'>3rd Place</option>
                                        <option value='4th Place'>4th Place</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPointAssignMeasurement
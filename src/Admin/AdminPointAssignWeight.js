import React from "react";
import config from "../config";

class AdminPointAssignWeight extends React.Component {


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
                win_id: 1,
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
                win_id: 1,
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
                win_id: 1,
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
                win_id: 1,
            }
            this.handleFetchPostPoints(postBody, placement)
        }

    }

    handleWeightPointsSubmit = e => {
        e.preventDefault()
        const getContestId = parseInt(localStorage.getItem("contest Id"))
        const getCategory = "weight"
        const user1 = () => {
            let selectedElement = document.getElementById('user1SelectWeight').value
            return this.handlePointAssignment(selectedElement, this.props.user1Id, getContestId, getCategory)
        }
        const user2 = () => {
            let selectedElement = document.getElementById('user2SelectWeight').value
            return this.handlePointAssignment(selectedElement, this.props.user2Id, getContestId, getCategory)
        }
        const user3 = () => {
            let selectedElement = document.getElementById('user3SelectWeight').value
            return this.handlePointAssignment(selectedElement, this.props.user3Id, getContestId, getCategory)
        }
        const user4 = () => {
            let selectedElement = document.getElementById('user4SelectWeight').value
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
                <h3>Calculate Weekly Weight Points</h3>
                <div className='weight-calc-button'>
                    <p>Assign rankings and press button to assign Points</p>
                    <button onClick={this.handleWeightPointsSubmit} className='glow-on-hover' name='' id=''>Calculate Points</button>

                </div>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout weight-point-calc'>
                        <div className='flex-item-workout'>
                            <form className='user1Div cont1'>
                                <div className='divideDiv1'>
                                    <span className='player1'>{this.props.user1Name}:</span>
                                    <span>{this.props.user1PrevWeightDate}: {this.props.user1PrevWeight} </span>
                                    <span>{this.props.user1CurrentWeightDate}: {this.props.user1CurrentWeight} </span>
                                </div>
                                <div className='divideDiv2'>
                                    <span>Percent Lost: <span id='player1Span' className='player1'>{this.handlePercentCalc(this.props.user1CurrentWeight, this.props.user1PrevWeight).toString()}</span></span>
                                    <br></br>
                                    <select id='user1SelectWeight' defaultValue='Not Selected'>
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
                                    <span>{this.props.user2PrevWeightDate}: {this.props.user2PrevWeight}</span>
                                    <span>{this.props.user2CurrentWeightDate}: {this.props.user2CurrentWeight}</span>
                                </div>
                                <div className='divideDiv2'>
                                    <span>Percent Lost: <span id='player2Span' className='player2'>{this.handlePercentCalc(this.props.user2CurrentWeight, this.props.user2PrevWeight).toString()}</span></span>
                                    <br></br>
                                    <select id='user2SelectWeight' defaultValue='Not Selected'>
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
                                    <span>{this.props.user3PrevWeightDate}: {this.props.user3PrevWeight}</span>
                                    <span>{this.props.user3CurrentWeightDate}: {this.props.user3CurrentWeight}</span>
                                </div>
                                <div className='divideDiv2'>
                                    <span>Percent Lost: <span id='player3Span' className='player3'>{this.handlePercentCalc(this.props.user3CurrentWeight, this.props.user3PrevWeight).toString()}</span></span>
                                    <br></br>
                                    <select id='user3SelectWeight' defaultValue='Not Selected'>
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
                                    <span>{this.props.user4PrevWeightDate}: {this.props.user4PrevWeight} </span>
                                    <span>{this.props.user4CurrentWeightDate}: {this.props.user4CurrentWeight} </span>
                                </div>
                                <div className='divideDiv2'>
                                    <span>Percent Lost: <span id='player4Span' className='player4'>{this.handlePercentCalc(this.props.user4CurrentWeight, this.props.user4PrevWeight).toString()}</span></span>
                                    <br></br>
                                    <select id='user4SelectWeight' defaultValue='Not Selected'>
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

export default AdminPointAssignWeight
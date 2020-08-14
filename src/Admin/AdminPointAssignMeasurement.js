import React from "react";

class AdminPointAssignMeasurement extends React.Component {

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
                    <button className='glow-on-hover' name='' id=''>Calculate Points</button>
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
                                    <select>
                                        <option selected></option>
                                        <option>1st Place</option>
                                        <option>2nd Place</option>
                                        <option>3rd Place</option>
                                        <option>4th Place</option>
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
                                    <select>
                                        <option selected></option>
                                        <option>1st Place</option>
                                        <option>2nd Place</option>
                                        <option>3rd Place</option>
                                        <option>4th Place</option>
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
                                    <select>
                                        <option selected></option>
                                        <option>1st Place</option>
                                        <option>2nd Place</option>
                                        <option>3rd Place</option>
                                        <option>4th Place</option>
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
                                    <select>
                                        <option selected></option>
                                        <option>1st Place</option>
                                        <option>2nd Place</option>
                                        <option>3rd Place</option>
                                        <option>4th Place</option>
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
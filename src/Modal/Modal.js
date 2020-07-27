import React, { useState } from "react"
import "./modal.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

class ContestSelectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            userContests: ["New Year New You", "Family Losers"],
            userName: "Kevin Davis"
        };
    }

    handleCloseBtn = () => {
        document.getElementById('overlay').classList.remove('is-visible');
        document.getElementById('modal').classList.remove('is-visible');
    }
    setStartDate = (date) => {
        this.setState({
            startDate: date
        })
    }
    setEndDate = (date) => {
        this.setState({
            endDate: date
        })
    }
    renderUserContests = () => {
        let contests = this.state.userContests.map(contest => {
            return(
                <option value={contest}>{contest}</option>
            )
        })
        return contests
    }

    render() {
        return(
            <div>
                <div className="overlay" id="overlay"></div>
                <div className="modal" id="modal">
                    <button className="modal-close-btn" id="modal-close-btn" onClick={this.handleCloseBtn}>X</button>
                    <div className="modal-content">
                        <div className="modal-item">
                            <h2>Hello {this.state.userName}!</h2>
                            Which Contest would you like to go to?<br/>
                            <select id="userContests" name="userContests">
                                {this.renderUserContests()}
                            </select>
                            <button>GO</button>
                        </div>
                        <div className="modal-item">
                            <h2>Or...</h2>
                            Create new contest:
                            <form className="contest-form">
                                <label htmlFor="contest-name">Contest Name: </label>
                                <input type="text" id="contest-name" name="contest-name" /><br/>
                                <label htmlFor="contest-start-date">Start Date: </label>
                                <DatePicker id="contest-start-date" selected={this.state.startDate} onChange={date => this.setStartDate(date)} /><br/>
                                <label htmlFor="contest-end-date">End Date: </label>
                                <DatePicker id="contest-end-date" selected={this.state.endDate} onChange={date => this.setEndDate(date)} /><br />
                                <label htmlFor="weighin-day">Weigh-in Day:</label>
                                <select id="weighin-day" name="weighin-day">
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thursday">Thursday</option>
                                    <option value="friday">Friday</option>
                                    <option value="saturday">Saturday</option>
                                    <option value="sunday">Sunday</option>
                                </select><br/>
                                <input type="submit" value="Submit"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContestSelectModal
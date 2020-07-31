import React, { useState } from "react"
import "./modal.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import config from "../config";
import ApiContext from "../ApiContext"
import { withRouter } from "react-router";

class ContestSelectModal extends React.Component {

    static contextType = ApiContext;

    handleNewContest = e => {
        e.preventDefault()
        const { contest_name, contest_start_date, contest_end_date, weighin_day } = e.target
        const newContest = {
            date_start: contest_start_date.value,
            date_end: contest_end_date.value,
            contest_name: contest_name.value,
            weighin_day: weighin_day.value,
            date_created: new Date(),
        }
        fetch(`${config.API_ENDPOINT}/api/contests`,{
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newContest),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                alert(`${newContest.contest_name} has been added as a contest!`)
            })

            .catch(error => {
                console.error({error})
            })
        const frm = document.getElementById('contest-form');
        frm.reset();
    }

    handleCloseBtn = () => {
        document.getElementById('overlay').classList.remove('is-visible');
        document.getElementById('modal').classList.remove('is-visible');
    }
    
    renderUserContests = () => {
        let contests = this.context.userContests.map(contest => {
            return(
                <option value={contest}>{contest}</option>
            )
        })
        return contests
    }

    handleContestSelect = e => {
        e.preventDefault()
        let selected = document.getElementById('userContests')
        let selectedContest = selected.options[selected.selectedIndex].text;
        const contestName = {
            contest_name: selectedContest,
        }
        fetch(`${config.API_ENDPOINT}/api/contests/getContestId`, {
            method: 'POST',
                credentials: 'include',
                headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(contestName),
        })
            .then(res => res.json())
            .then(json => {
            this.context.setContestId(json[0].contest_id)
                console.log(this.context.contest_id)
                this.props.history.push('/personal/home')
                /*const contestInfo = {
                    contest_id: json[0].contest_id,
                }*/
                /*fetch(`${config.API_ENDPOINT}/api/contests/contestInfo`,{
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'content-type' : 'application/json',
                    },
                    body: JSON.stringify(contestInfo),
                })
                    .then(res => {
                        if (!res.ok)
                            return res.json().then(e => Promise.reject(e))
                        else {
                            this.props.history.push('/personal/home')
                        }
                    })*/
            })




    }

    render() {
        return(
            <div>
                <div className="overlay" id="overlay"></div>
                <div className="modal" id="modal">
                    <button className="modal-close-btn" id="modal-close-btn" onClick={this.handleCloseBtn}>X</button>
                    <div className="modal-content">
                        <div className="modal-item">
                            <h2>Hello {this.context.userName}!</h2>
                            Which Contest would you like to go to?<br/>
                            <select id="userContests" name="userContests">
                                {this.renderUserContests()}
                            </select>
                           <button onClick={this.handleContestSelect}>GO</button>
                        </div>
                        <div className="modal-item">
                            <h2>Or...</h2>
                            Create new contest:
                            <form className="contest-form" id="contest-form" onSubmit={this.handleNewContest}>
                                <label htmlFor="contest_name">Contest Name: </label>
                                <input type="text" id="contest_name" name="contest_name" /><br/>
                                <label htmlFor="contest_start_date">Start Date: </label>
                                <DatePicker id="contest_start_date" selected={this.context.newContestStartDate} onChange={date => this.context.handleSetNewContestStartDate(date)} /><br/>
                                <label htmlFor="contest_end_date">End Date: </label>
                                <DatePicker id="contest_end_date" selected={this.context.newContestEndDate} onChange={date => this.context.handleSetNewContestEndDate(date)} /><br />
                                <label htmlFor="weighin_day">Weigh-in Day:</label>
                                <select id="weighin_day" name="weighin_day">
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

export default withRouter(ContestSelectModal)
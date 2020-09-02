import React from "react"
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
                const getContestId = () => {
                    return fetch(`${config.API_ENDPOINT}/api/contests/contestByName/getId?contest_name=${newContest.contest_name}`)
                        .then(res => res.json())
                }
                alert(`${newContest.contest_name} has been added as a contest!`)
                getContestId()
                    .then((contestId) => {
                        const userContestData = {
                            user_id : parseInt(localStorage.getItem("user Id")),
                            contest_id: parseInt(contestId[0].contest_id)
                        }
                        fetch(`${config.API_ENDPOINT}/api/contesttouser`, {
                            method: 'POST',
                            credentials: 'include',
                            headers: {
                                'content-type' : 'application/json',
                            },
                            body: JSON.stringify(userContestData),
                        })
                            .then(res => {
                                if (!res.ok)
                                    return res.json().then(e => Promise.reject(e))
                                const contestIdData = {
                                    user_id : userContestData.user_id,
                                    contest_id : userContestData.contest_id
                                }
                                const contestIdPatch = {
                                    contest_id : userContestData.contest_id
                                }
                                alert(`User with User Id: ${userContestData.user_id} has been added to your contest`)
                                fetch(`${config.API_ENDPOINT}api/currentstats/userId/${contestIdData.user_id}`, {
                                    method: 'PATCH',
                                    credentials: 'include',
                                    headers: {
                                        'content-type' : 'application/json',
                                    },
                                    body: JSON.stringify(contestIdPatch),
                                })
                                    .then(res => {
                                        if (!res.ok)
                                            return res.json().then(e => Promise.reject(e))
                                        else {
                                            alert(`Contest with Contest ID ${contestIdData.contest_id} has been added to the current stats table!`)
                                        }
                                    })


                            })
                    })

            })

            .catch(error => {
                console.error({error})
            })
        const frm = document.getElementById('contest-form');
        frm.reset();
        document.getElementById('overlay').classList.remove('is-visible');
        document.getElementById('modal').classList.remove('is-visible');
    }

    handleCloseBtn = () => {
        document.getElementById('overlay').classList.remove('is-visible');
        document.getElementById('modal').classList.remove('is-visible');
    }
    
    renderUserContests = () => {
        let contests = this.context.userContests.map(function(contest, index) {
            return(
                <option value={contest} key={index}>{contest}</option>
            )
        })
        return contests
    }

    validateContest = e => {
        e.preventDefault()
        let selected = document.getElementById('userContests')
        try {
        let selectedContest = selected.options[selected.selectedIndex].text;
        const contestName = {
            contest_name: selectedContest,
        }
        if (selectedContest === "choose a contest") {
            alert("You must choose or create a contest")
        } else {
           this.handleContestSelect(contestName)
        }  
        }
        catch {
            alert("You don't have any contests! Create one or contact the admin of an existing one to be added")
        }
    }
    handleContestSelect = contestName => {
       function getContestId() {
           return fetch(`${config.API_ENDPOINT}/api/contests/contestName/${contestName.contest_name}`)
               .then(res => res.json())
       }


        function getContestInfo(){
            return Promise.all([getContestId()])
        }


        getContestInfo()
            .then(([contest_id]) => {
                this.context.setContestId(contest_id[0].contest_id)
                let startDateFormatJS = new Date(contest_id[0].date_start)
                let endDateFormatJS = new Date(contest_id[0].date_end)
                localStorage.setItem("contest Id", `${contest_id[0].contest_id}`)
                localStorage.setItem('contest StartDate', `${startDateFormatJS}`)
                localStorage.setItem('contest EndDate', `${endDateFormatJS}`)
                localStorage.setItem('contest Name', `${contest_id[0].contest_name}`)
                this.props.history.push('/personal/home')
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
                            <h2>Hello {localStorage.getItem("display Name")}!</h2>
                            Which Contest would you like to go to?<br/>
                            <select id="userContests" name="userContests">
                                {this.renderUserContests()}
                            </select>
                           <button onClick={this.validateContest}>GO</button>
                        </div>
                        <div className="modal-item">
                            <h2>Or...</h2>
                            Create new contest:
                            <form className="contest-form" id="contest-form" onSubmit={this.handleNewContest}>
                                <label htmlFor="contest_name">Contest Name: </label>
                                <input required type="text" id="contest_name" name="contest_name" /><br/>
                                <label htmlFor="contest_start_date">Start Date: </label>
                                <DatePicker id="contest_start_date" selected={Date.parse(this.context.newContestStartDate)} onChange={date => this.context.handleSetNewContestStartDate(date)} /><br/>
                                <label htmlFor="contest_end_date">End Date: </label>
                                <DatePicker id="contest_end_date" selected={Date.parse(this.context.newContestEndDate)} onChange={date => this.context.handleSetNewContestEndDate(date)} /><br />
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
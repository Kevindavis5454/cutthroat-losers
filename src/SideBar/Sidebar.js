import React from "react";
import './sidebar.css'
import {Link} from "react-router-dom";
import ApiContext from "../ApiContext";
import config from "../config";
import Contestant from "./Contestant";



class Sidebar extends React.Component {

    static contextType = ApiContext;

    componentDidMount() {


        const contestInfo = {
            contest_id: this.context.contest_id,
        }

        fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUsers?contest_id=${contestInfo.contest_id}`)
            .then((usersRes) => {
                if (!usersRes.ok)
                    return usersRes.json().then(e => Promise.reject(e))

                return usersRes.json()
            })
            .then((contestants) => {
                this.context.contestants = contestants
                console.log(contestants)
                const contestantArray = []
                contestants.map(user =>
                    fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUsersInfo?user_id=${user.user_id}`)
                        .then((userRes) => {
                            if (!userRes.ok)
                                return userRes.json().then(e => Promise.reject(e))
                            return userRes.json()
                        })
                        .then((userContestant) => {
                            contestantArray.push(userContestant)
                        })
                        .then((json)=> {
                            this.context.handleSetContestantInfo(contestantArray)
                        })
                )
            })
            .catch(error => {
                console.error({ error })
            })


    }

    render () {
        console.log(this.context.contestantUserInfo)
        const contestUser = this.context.contestantUserInfo.map(function (user, index) { return <Contestant key={index} name={user[0].display_name} /> })
        console.log(contestUser)
        return (
            <>

            <div className="flex-container-sidebar">
                {contestUser}
            </div>
                </>


        )
    }
}

export default Sidebar
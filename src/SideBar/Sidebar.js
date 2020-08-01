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
                const contestUserInfo = contestants.map(user => fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUsersInfo?user_id=${user.user_id}`))
                this.context.contestantInfo = contestUserInfo
                console.log(this.context.contestantInfo)
            })
            .catch(error => {
                console.error({ error })
            })


    }

    render () {
        const contestUser = this.context.contestantInfo.map(user => <Contestant key={user.id}  name={user.display_name} />)
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
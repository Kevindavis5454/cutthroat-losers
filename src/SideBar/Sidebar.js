import React from "react";
import './sidebar.css'
import {Link} from "react-router-dom";
import ApiContext from "../ApiContext";
import config from "../config";
import Contestant from "./Contestant";



class Sidebar extends React.Component {

    static contextType = ApiContext;

    componentDidMount() {



        function getContestantList () {
            return Promise.all([getContestants()])
        }

        const getContestants = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUsers?contest_id=${localStorage.getItem("contest Id")}`)
                .then(res => res.json())
        }

        function getContestantInfo (user_id) {
            return Promise.all([getContestantStats(user_id)])
        }
        const getContestantStats = (user_id) => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/currentStats/?user_id=${user_id}`)
                .then(res => res.json())
        }

        getContestantList()
                    .then(([contestants]) => {
                        const contestantIDs = []
                        contestants.forEach(contestant => {
                            contestantIDs.push(contestant.user_id)
                        })
                        this.context.contestantIds = contestantIDs
                        console.log(this.context.contestantIds, 'context contestant ids')
                        const currentContestantsInfo = []
                        contestantIDs.forEach(user_id => {
                            getContestantInfo(user_id)
                                .then(res => {
                                    currentContestantsInfo.push(res)})
                        })
                        this.context.contestantUserInfo = currentContestantsInfo
                        console.log(this.context.contestantUserInfo, 'context contestants')
                        

                    })

        console.log("sidebar mounted")
        console.log(localStorage.getItem("user Id"), "user id")
        console.log(localStorage.getItem("contest Id"), "contest id")

    }

    render () {

        const contestUser = this.context.contestantUserInfo.map(function (user, index) { return <Contestant key={index} name={user.display_name} weight={user.current_weight} /> })
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
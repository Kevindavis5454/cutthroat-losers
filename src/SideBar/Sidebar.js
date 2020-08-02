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
                  const currentWeightArray = []
                  contestants.map(user =>
                      fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUsersInfo?user_id=${user.user_id}`)
                          .then((userRes) => {
                              if (!userRes.ok)
                                  return userRes.json().then(e => Promise.reject(e))
                              return userRes.json()
                          })
                          .then((userContestant) => {
                              contestantArray.push(userContestant)
                              /*console.log(userContestant, 'userContestant')*/
                          })
                          .then((json) => {
                              this.context.handleSetContestantInfo(contestantArray)
                          })
                  )
                  contestants.map(weight =>
                      fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUserCurrentWeight?user_id=${weight.user_id}&contest_id=${contestInfo.contest_id}`)
                          .then((weightRes) => {
                              if (!weightRes.ok)
                                  return weightRes.json().then(e => Promise.reject(e))
                              return weightRes.json()
                          })
                          .then((currentWeight) => {
                              currentWeightArray.push(currentWeight)
                              /*console.log(currentWeight, "currentWeight")*/
                          })
                          .then((json) => {
                              this.context.handleSetContestantCurrentWeight(currentWeightArray)
                          })
                  )

              })

              .catch(error => {
                  console.error({error})
              })

    }

    render () {

        const contestUser = this.context.contestantUserInfo.map(function (user, index) { return <Contestant key={index} name={user[0].display_name} /> })
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
import React from "react";
import './sidebar.css'
import ApiContext from "../ApiContext";
import config from "../config";
import Contestant from "./Contestant";



class Sidebar extends React.Component {

    static contextType = ApiContext;



    constructor(props){
        super(props);
        this.state = {
            contestUsers: []
        }
    }

    componentDidMount() {

        const getSideBarInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/sidebarStats?contest_id=${localStorage.getItem("contest Id")}`)
                .then(res => res.json())
        }

        async function getSideBarStats() {
            return await Promise.all([getSideBarInfo()])
        }

        getSideBarStats()
            .then(([results]) => {
                this.setState({
                    contestUsers: results
                })
            })
                        
    }
    

    render () {

        const sideBarRender = this.state.contestUsers.map(function (user, index){
            return ( <Contestant key={index} name={user.display_name} weight={user.current_weight} goal={user.goal_weight} user_id={user.user_id}/> )
        })
        
        return (
            <>

            <div className="flex-container-sidebar">
                {sideBarRender}
            </div>
                </>


        )
    }
}

export default Sidebar
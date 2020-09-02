import React from "react";
import config from "../config";
import Contestant from "../SideBar/Contestant";

class AdminContestToUser extends React.Component {

    state = {
        users: [],
    }

    componentDidMount() {
        const getUsers = () => {
            return fetch(`${config.API_ENDPOINT}/api/users/adminPage/all`)
                .then(res => res.json())
        }

        getUsers()
            .then((users) => {
                this.setState({
                    users: users
                })
            })
    }

    handleAddUserToContest = e => {
        e.preventDefault()
        const selectedUser = document.getElementById('userSelectContest').options[document.getElementById('userSelectContest').selectedIndex].value
        const userPostInfo = {
            user_id: parseInt(selectedUser),
            contest_id: parseInt(localStorage.getItem("contest Id"))
        }
        fetch(`${config.API_ENDPOINT}/api/contesttouser`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(userPostInfo),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                else {
                    alert(`User with User Id: ${userPostInfo.user_id} has been added to your contest`)
                }
            })
            .catch(error => {
                console.error({error})
            })

    }

    render () {

        const userOptionsRender = this.state.users.map(function (user, index){
            return <option key={index} value={user.user_id}>{user.user_id}, {user.username}, {user.display_name}</option>
        })

        return (
            <div className='groupWeightPointsBox'>
                <h3>Add a User to your Contest</h3>

                <div className="flex-container-workout">
                    <div className='flex-cell-workout weight-point-calc'>
                        <div className='flex-item-workout'>
                            <div className='weight-calc-button'>
                            <p className='title-para'>Select the User and press the button to assign that User to your Contest</p>
                        </div>
                            <br></br>
                            <span>Select a user to add</span>

                            <form className='addUser'>
                                <div className='divideDiv1'>
                                    <br></br>
                                    <select id='userSelectContest' defaultValue='Not Selected'>
                                        <option value='Not Selected'></option>
                                        {userOptionsRender}
                                    </select>
                                </div>
                                <div className='divideDiv2'>
                                    <br></br>
                                    <button onClick={this.handleAddUserToContest} className='glow-on-hover' name='' id=''>Add User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AdminContestToUser
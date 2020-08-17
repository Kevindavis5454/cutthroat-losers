import React from "react";
import "./sidebar.css"
import './login.css'
import config from "../config";
import ApiContext from "../ApiContext"
const ws = require('../windowscroll')


class SidebarHome extends React.Component {

    static contextType = ApiContext;

    handleSignup = e => {
        e.preventDefault()
        const { signup_name, signup_email, signup_password, current_weight, goal_weight } = e.target
        const newUser = {
            display_name: signup_name.value,
            username: signup_email.value.toLowerCase(),
            password: signup_password.value
        }
        fetch(`${config.API_ENDPOINT}/api/signup`,{
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                ws.scrollTopAnimated(300);
                alert(`${newUser.display_name} has been added as a user!`)
                const getUserId = () => {
                    fetch(`${config.API_ENDPOINT}/api/userIdByUsername?username=${newUser.username}`)
                        .then(res => res.json())
                        .then(json => {
                        
                        const userStats = {
                            user_id: json[0].user_id,
                            current_weight: current_weight.value,
                            goal_weight: goal_weight.value,
                            display_name: signup_name.value
                        }
                        fetch(`${config.API_ENDPOINT}/api/addToCurrentStats`,{
                            method: 'POST',
                            credentials: 'include',
                            headers: {
                                'content-type' : 'application/json'
                            },
                            body: JSON.stringify(userStats),
                        })
                            .then(res => {
                                if (!res.ok)
                                    return res.json().then(e => Promise.reject(e))
                                const frm = document.getElementById('sign_up_form');
                                frm.reset();
                            })
                    })

                }
                getUserId()
                

            })
            .catch(error => {
                console.error({error})
            })
    }

    handleLogin = e => {
        e.preventDefault()
        const { login_email, login_password } = e.target
        const userLogin = {
            username: login_email.value,
            password: login_password.value,
        }
        fetch(`${config.API_ENDPOINT}/api/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(userLogin),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))

                else {
                    fetch(`${config.API_ENDPOINT}/api/users`)
                        .then(res => res.json())
                        .then(json => {
                            const currentUser = json.filter(user => user.username.toLowerCase() === userLogin.username.toLowerCase());
                            localStorage.setItem("user Id", `${currentUser[0].user_id}`)
                            localStorage.setItem("display Name", `${currentUser[0].display_name}`)
                            fetch(`${config.API_ENDPOINT}/api/contest_to_user/${currentUser[0].user_id}`)
                                .then(res => res.json())
                                .then(json => {
                                    const contestArray = ["choose a contest"];
                                    json.forEach(contest => {
                                        return(
                                        fetch(`${config.API_ENDPOINT}/api/contests/${contest.contest_id}`)
                                            .then(res => res.json())
                                            .then(json => {
                                                contestArray.push(json[0].contest_name)
                                            })
                                            .then(json => {
                                                this.context.handleSetContests(contestArray)
                                            })
                                    )})
                                    
                                })
                        })

                        .then(
                            document.getElementById('overlay').classList.add('is-visible'),
                            document.getElementById('modal').classList.add('is-visible')
                        )}
            })
            .catch(error => {
                console.error({error})
            })


        
    }

    render () {
        return (
            <>

                <div className="flex-container-sidebar sidebar-home-container">
                    <div className="flex-cell-sidebar sidebar-home">
                        <div className="flex-item-sidebar">
                            <div className="login-block">
                                <h3>One of us?</h3>
                                <span>If you already have an account, just sign in!</span>
                                <form onSubmit={this.handleLogin} target="_blank" id='login_form'>
                                    <p><label htmlFor="login_email">Email</label>
                                        <input type="text"
                                               name="login_email"
                                               id="login_email"
                                               required
                                        />
                                    </p>
                                    <p><label htmlFor="login_password">Password</label>
                                        <input type="password"
                                               name="login_password"
                                               id="login_password"
                                               required
                                        />
                                    </p>
                                    <p className="submit-wrap">
                                        <input type="submit"
                                               id="ftp-submit"
                                               className="button"
                                               value="Login"/>
                                    </p>
                                    <ul>
                                    <li>Demo Credentials:</li>
                                        <li>Username: Kevin@gmail.com</li>
                                        <li>Password: test123</li>
                                        <li>Contest: Family Losers</li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-cell-sidebar sidebar-home">
                        <div className="flex-item-sidebar">
                            <div className="login-block">
                                <h3>New here?</h3>
                                <span>Sign up and join the game!</span>
                                <form onSubmit={this.handleSignup} target="_blank" id='sign_up_form'>
                                    <p><label htmlFor="signup_name">Name</label>
                                        <input type="text"
                                               name="signup_name"
                                               id="signup_name"
                                               required
                                        />
                                    </p>
                                    <p><label htmlFor="signup_email">Email</label>
                                        <input type="text"
                                               name="signup_email"
                                               id="signup_email"
                                               required
                                        />
                                    </p>
                                    <p><label htmlFor="signup_password">Password</label>
                                        <input type="password"
                                               name="signup_password"
                                               id="signup_password"
                                               required
                                        />
                                    </p>
                                    <p><label htmlFor="current_weight">Current Weight</label>
                                        <input type="text"
                                               name="current_weight"
                                               id="current_weight"
                                               required
                                        />
                                    </p>
                                    <p><label htmlFor="goal_weight">Goal Weight</label>
                                        <input type="text"
                                               name="goal_weight"
                                               id="goal_weight"
                                               required
                                        />
                                    </p>
                                    <p className="submit-wrap">
                                        <input type="submit"
                                               id="signup-submit"
                                               className="button"
                                               value="Sign Up"/>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SidebarHome
import React from "react";
import "./sidebar.css"
import {Link} from "react-router-dom";
import './login.css'
import config from "../config";
const ws = require('../windowscroll')

class SidebarHome extends React.Component {

    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    handleSignup = e => {
        e.preventDefault()
        const { signup_name, signup_email, signup_password } = e.target
        const newUser = {
            display_name: signup_name.value,
            email: signup_email.value,
            password: signup_password.value
        }
        fetch(`${config.API_ENDPOINT}/users`,{
            method: 'POST',
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
            })

            .catch(error => {
                console.error({error})
            })
        const frm = document.getElementById('sign_up_form');
        frm.reset();
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
                                <form action="#" method="post" target="_blank">
                                    <p><label htmlFor="secret-user-name">User Name</label>
                                        <input type="text"
                                               name="secret-user-name"
                                               id="secret-user-name"/>
                                    </p>
                                    <p><label htmlFor="secret-password">Password</label>
                                        <input type="password"
                                               name="secret-password"
                                               id="secret-password"/>
                                    </p>
                                    <p className="submit-wrap">
                                        <Link to='/personal/home'><input type="submit"
                                                                         id="ftp-submit"
                                                                         className="button"
                                                                         value="Login"/></Link>
                                    </p>
                                    <h4>This is a test page, click the Login button to proceed</h4>
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
                                               id="signup_name"/>
                                    </p>
                                    <p><label htmlFor="signup_email">Email</label>
                                        <input type="text"
                                               name="signup_email"
                                               id="signup_email"/>
                                    </p>
                                    <p><label htmlFor="signup_password">Password</label>
                                        <input type="password"
                                               name="signup_password"
                                               id="signup_password"/>
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
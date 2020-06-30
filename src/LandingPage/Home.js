import React from "react";
import './landingPage.css'
import './home.css'
import {Link} from "react-router-dom";

class Home extends React.Component {

    render () {
        return (
            <div className='landing-div'>
                <div className='login-register'>
                    <div className='login-left'>
                        <div className="login-block last">
                        <h3>One of us?</h3>
                        <h4>If you already have an account, just sign in!</h4>
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
                                <Link to='/personal'><input type="submit"
                                       id="ftp-submit"
                                       className="button"
                                       value="Login"/></Link>
                            </p>
                            <h4>This is a test page, click the Login button to proceed</h4>
                        </form>
                        </div>
                    </div>
                    <div className='login-right'>
                        <div className="login-block">
                            <h3>New here?</h3>
                            <h4>Sign up and join the game!</h4>
                            <form action="#" method="post" target="_blank">
                                <p><label htmlFor="sharepoint-company-name">Name</label>
                                    <input type="text"
                                           name="sharepoint-company-name"
                                           id="sharepoint-company-name"/>
                                </p>
                                <p><label htmlFor="sharepoint-user-name">User Name</label>
                                    <input type="text"
                                           name="sharepoint-user-name"
                                           id="sharepoint-user-name"/>
                                </p>
                                <p><label htmlFor="sharepoint-password">Password</label>
                                    <input type="password"
                                           name="sharepoint-password"
                                           id="sharepoint-password"/>
                                </p>
                                <p className="submit-wrap">
                                    <input type="submit"
                                           id="sharepoint-submit"
                                           className="button"
                                           value="Sign Up"/>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
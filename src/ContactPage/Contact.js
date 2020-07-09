import React from 'react'
import './contact.css'
import {Link} from "react-router-dom"
import GroupWeightTracking from "../GroupWeightTracking/GroupWeightTracking";

class Contact extends React.Component {
    render() {
        return(
            <div className='contact-section'>
                <div className="flex-container">
                    <div className="flex-cell contact-cell">
                        <div className="flex-item">
                            <div className='login-block'>
                            <h2>Contact us!</h2>
                            <p>For help or questions:</p>
                            <form action="#" method="post" target="_blank">
                                <p><label htmlFor="name">Your Name:</label>
                                    <input type="text"
                                           name="name"
                                           id="name"/>
                                </p>
                                <p><label htmlFor="question-type">Request type:</label>
                                    <select id="request-type" name="request-type">
                                        <option value="question">Question</option>
                                        <option value="comment">Comment</option>
                                        <option value="bug-report">Bug Report</option>
                                    </select>
                                </p>
                                <p><label htmlFor="message">Message:</label>
                                    <textarea name="message"></textarea>
                                </p>
                                <p className="submit-wrap">
                                    <Link to='/personal/contact'><input type="submit"
                                                                        id="ftp-submit"
                                                                        className="button"
                                                                        value="Submit"/></Link>
                                </p>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
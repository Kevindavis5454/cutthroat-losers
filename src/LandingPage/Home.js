import React from "react";
import './landingPage.css'
import {Link} from "react-router-dom";

class Home extends React.Component {

    render () {
        return (
            <div className='landing-div'>
            <div className='login-register'>
                <div className='login-left'>Login
                    <br></br>
                    <Link to='/personal'> <button>Login</button> </Link>
                </div>
                <hr></hr>
                <div className='login-right'>Register</div>
            </div>
            </div>
        )
    }
}

export default Home
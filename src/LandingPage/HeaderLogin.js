import React from "react";
import './landingPage.css';
import {Link} from "react-router-dom";

class HeaderLogin extends React.Component {

    render () {
        return (
            <>
            <div className='landing-nav'>
                <img src={require('../Header/LogoMakr_37X4P2.png')} alt='logo'></img>
            </div>
                <nav role="custom-dropdown">
                    <input type="checkbox" id="button"></input>
                    <label htmlFor="button" onClick className='nav-button-label'></label>
                    <ul>
                        <li><Link to='/'><div>Home</div></Link></li>
                        <li><Link to='/about'><div>About</div></Link></li>
                        <li><Link to='/howtouse'><div>How To Use</div></Link></li>
                        <li><Link to='/rules'><div>Rules</div></Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default HeaderLogin
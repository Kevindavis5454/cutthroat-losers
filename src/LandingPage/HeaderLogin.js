import React from "react";
import './landingPage.css';
import {Link} from "react-router-dom";

class HeaderLogin extends React.Component {

    render () {
        return (
            <div className='landing-nav'>
                <img src={require('../Header/LogoMakr_37X4P2.png')} alt='logo'></img>
                <div className='landing-nav-buttons'>
                    <Link to='/'><button className='glow-on-hover header'><span>Home</span></button></Link>
                    <Link to='/about'><button className='glow-on-hover header'><span>About</span></button></Link>
                    <Link to='/howtouse'><button className='glow-on-hover header'><span>How to use</span></button></Link>
                    <Link to='/rules'><button className='glow-on-hover header'><span>Rules</span></button></Link>
                </div>
            </div>
        )
    }
}

export default HeaderLogin
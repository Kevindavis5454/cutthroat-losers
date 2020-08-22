import React from "react";
import '../LandingPage/landingPage.css';
import {Link, BrowserRouter} from "react-router-dom";

class HeaderLogin extends React.Component {

    render () {
        return (
            <>
            <BrowserRouter>
            <div className='header-title'>
                <Link to='/'><img src={require("./LogoMakr_37X4P2.png")} alt='Logo' className='header-img'></img></Link>
            </div>
                <nav className='large-screen-nav'>
                    <ul className='nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/landing/howtouse'>How To</Link></li>
                        <li><Link to='/landing/rules'>Rules</Link></li>
                    </ul>
                </nav>
                </BrowserRouter>
            </>
        )
    }
}

export default HeaderLogin
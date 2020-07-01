import React from 'react';
import {Link} from "react-router-dom";
import './header.css'

class Header extends React.Component {

    handleBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <>
                <div className="header-title">
                    <Link to='/'><img src={require("./LogoMakr_37X4P2.png")} alt='Logo' className='header-img'></img></Link>
                </div>
                <nav role="custom-dropdown">
                    <input type="checkbox" id="button"></input>
                        <label htmlFor="button" onClick className='nav-button-label'></label>

                        <ul>
                            <li><Link to='/personal/home'><div>Home</div></Link></li>
                            <li><Link to='/personal'><div>Personal</div></Link></li>
                            <li><Link to='/group'><div>Group</div></Link></li>
                            <li><Link to='/personal/contact'><div>Contact</div></Link></li>
                        </ul>
                </nav>
            </>
        )
    }
}

export default Header
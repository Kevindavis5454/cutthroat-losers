import React from 'react';
import {Link, BrowserRouter} from "react-router-dom";
import './header.css'

class Header extends React.Component {


    render() {
        return (
            <>
            <BrowserRouter>
                <div className="header-title">
                    <Link to='/'><img src={require("./LogoMakr_37X4P2.png")} alt='Logo' className='header-img'></img></Link>
                </div>
                <nav className='large-screen-nav'>
                    <ul className='nav'>
                        <li><Link to='/personal/home'>Home</Link></li>
                        <li><Link to='/personal'>Personal</Link>
                        <ul>
                            <li><Link to='/personal/weighttracker'>Weight Tracker</Link></li>
                            <li><Link to='/personal/workouttracker'>Workout Tracker</Link></li>
                            <li><Link to='/personal/sabotages'>Sabotages</Link></li>
                            <li><Link to='/personal/points'>Points</Link></li>
                            <li><Link to='/personal/rules'>Rules</Link></li>
                        </ul>
                        </li>
                        <li><Link to='/group'>Contest</Link>
                        <ul>
                            <li><Link to='/group/weighttracker'>Weight Tracking</Link></li>
                            <li><Link to='/group/workouttracker'>Workout Tracking</Link></li>
                            <li><Link to='/group/sabotages'>Sabotages</Link></li>
                            <li><Link to='/group/points'>Points</Link></li>
                        </ul>
                        </li>
                        <li><Link to='/admin'>Admin</Link></li>
                        <li><Link to='/personal/contact'>Contact</Link></li>
                    </ul>
                </nav>
                </BrowserRouter>
            </>
        )
    }
}

export default Header
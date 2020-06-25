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
                <div className="nav">
                    <div className="table">

                        <ul className="select">
                            <Link to='/personal'><li><b>Home</b></li></Link>
                        </ul>

                        <ul className="select">
                            <li><a href="#nogo"><b>Personal Stats</b></a>
                                <div className="select_sub">
                                    <ul className="sub">
                                        <li><Link to='/personal/weighttracker'>Weight Tracker</Link></li>
                                        <li><Link to='/personal/workouttracker'>Workout Tracker</Link></li>
                                        <li><Link to='/personal/sabotages'>Current Sabotages</Link></li>
                                        <li><Link to='/personal/points'>Current Points</Link></li>
                                        <li><Link to='/personal/bingo'>Bingo</Link></li>
                                        <li><Link to='/personal/chat'>Chat</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        <ul className="select">
                            <li><a href="#nogo"><b>Group Info</b></a>
                                <div className="select_sub show">
                                    <ul className="sub">
                                        <li><a href="#nogo">n/a</a></li>
                                        <li><a href="#nogo">n/a</a></li>
                                        <li><a href="#nogo">n/a</a></li>
                                        <li><a href="#nogo">n/a</a></li>
                                        <li><a href="#nogo">n/a</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </>
        )
    }
}

export default Header
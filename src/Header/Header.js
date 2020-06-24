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
                            <Link to='/personal'><li><b>Personal Page</b></li></Link>
                        </ul>

                        <ul className="select">
                            <li><a href="#nogo"><b>Joseph Turner</b></a>
                                <div className="select_sub">
                                    <ul className="sub">
                                        <li><a href="#nogo">Fishermen at Sea</a></li>
                                        <li><a href="#nogo">The Shipwreck</a></li>
                                        <li><a href="#nogo">The Vale of Ashburnham</a></li>
                                        <li><a href="#nogo">Crossing the Brook</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        <ul className="select">
                            <li><a href="#nogo"><b>John Constable</b></a>
                                <div className="select_sub show">
                                    <ul className="sub">
                                        <li><a href="#nogo">The Hay Wain</a></li>
                                        <li><a href="#nogo">Brighton Beach</a></li>
                                        <li><a href="#nogo">Malvern Hall</a></li>
                                        <li><a href="#nogo">Salisbury Cathedral</a></li>
                                        <li><a href="#nogo">Weymouth Bay</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>


                        <ul className="select">
                            <li><a href="#nogo"><b>Henri Matisse</b></a>
                                <div className="select_sub">
                                    <ul className="sub">
                                        <li><a href="#nogo">The Girl with Green Eyes</a></li>
                                        <li><a href="#nogo">The Dream</a></li>
                                        <li><a href="#nogo">Woman in Blue</a></li>
                                        <li><a href="#nogo">The Yellow Dress</a></li>
                                        <li><a href="#nogo">The Piano Lesson</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>


                        <ul className="select">
                            <li><a href="#nogo"><b>Paul Cezanne</b></a>
                                <div className="select_sub">
                                    <ul className="sub">
                                        <li><a href="#nogo">The Large Bathers</a></li>
                                        <li><a href="#nogo">Onions and Bottles</a></li>
                                        <li><a href="#nogo">Mardi Gras</a></li>
                                        <li><a href="#nogo">Still Life</a></li>
                                        <li><a href="#nogo">Boy in a Red Waistcoat</a></li>
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
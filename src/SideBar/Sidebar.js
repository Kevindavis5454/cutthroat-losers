import React from "react";
import './sidebar.css'
import {Link} from "react-router-dom";



class Sidebar extends React.Component {

    render () {

        return (
            <>

            <div className="flex-container-sidebar">
                <div className="flex-cell-sidebar ">
                    <Link className="flex-item-sidebar first-player" to='/personal/home'>
                        <h3>Kevin</h3>
                        <div className='circular--portrait'>
                            <img src={require('./KevinProfilePic.JPG')} alt='Profile Picture' className='profile-pic'></img>
                        </div>
                        <span>Current Weight:</span>
                        <span>Goal Weight:</span>
                        <span>Current Points:</span>
                    </Link>
                </div>
                <div className="flex-cell-sidebar ">
                    <Link className="flex-item-sidebar second-player" to='/personal/home'>
                        <h3>Bork Bork</h3>
                        <div className='circular--portrait'>
                            <img src={require('./aussiebluemerle.jpg')} alt='Profile Picture' className='profile-pic'></img>
                        </div>
                        <span>Current Weight:</span>
                        <span>Goal Weight:</span>
                        <span>Current Points:</span>
                    </Link>
                </div>
                <div className="flex-cell-sidebar ">
                    <Link className="flex-item-sidebar third-player" to='/personal/home'>
                        <h3>Woof Woof</h3>
                        <div className='circular--portrait'>
                            <img src={require('./aussiepuppyblackwhite.jpg')} alt='Profile Picture' className='profile-pic'></img>
                        </div>
                        <span>Current Weight:</span>
                        <span>Goal Weight:</span>
                        <span>Current Points:</span>
                    </Link>
                </div>
                <div className="flex-cell-sidebar ">
                    <Link className="flex-item-sidebar fourth-player" to='/personal/home'>
                        <h3>Moon Mooon</h3>
                        <div className='circular--portrait'>
                            <img src={require('./AussieSnow.gif')} alt='Profile Picture' className='profile-pic'></img>
                        </div>
                        <span>Current Weight:</span>
                        <span>Goal Weight:</span>
                        <span>Current Points:</span>
                    </Link>
                </div>
            </div>
                </>


        )
    }
}

export default Sidebar
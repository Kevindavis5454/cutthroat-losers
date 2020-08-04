import React from "react";
import ApiContext from "../ApiContext";
import {Link} from "react-router-dom";

class Contestant extends React.Component {

    static contextType = ApiContext;

    render() {
        return(
            <>
                    <div className="flex-cell-sidebar ">
                        <Link className="flex-item-sidebar first-player" to='/personal/home'>
                            <h3>{this.props.name}</h3>
                            <div className='circular--portrait'>
                                <img src='' alt='Profile Picture' className='profile-pic'></img>
                            </div>
                            <span>Current Weight: </span>
                            <span>Goal Weight:</span>
                            <span>Current Points:</span>
                        </Link>
                    </div>
                </>
        )
    }
}

export default Contestant
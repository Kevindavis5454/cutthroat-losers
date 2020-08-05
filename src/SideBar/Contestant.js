import React from "react";
import {Link} from "react-router-dom";

class Contestant extends React.Component {

    handleUserSwitch = (e) => {
        localStorage.setItem("user Id", `${this.props.user_id}`)
        window.location.reload();
    }

    render() {

        /*onClick={this.handleUserSwitch()}*/

        return(
            <>
                    <div className="flex-cell-sidebar ">
                        <Link className="flex-item-sidebar first-player" to='/personal' onClick={this.handleUserSwitch} >
                            <h3>{this.props.name}</h3>
                            <div className='circular--portrait'>
                                <img src='' alt='Profile Picture' className='profile-pic' ></img>
                            </div>
        <span>Current Weight: {this.props.weight}</span>
        <span>Goal Weight: {this.props.goal}</span>
                            <span>Current Points:</span>
                        </Link>
                    </div>
                </>
        )
    }
}

export default Contestant
import React from "react";
import {Link} from "react-router-dom";
import ContestantCompletion from "./ContestantCompletion";


class Contestant extends React.Component {


    handleUserSwitch = (e) => {
        localStorage.setItem("user Id", `${this.props.user_id}`)
        window.location.reload();
    }



    render() {

        return(
            <>
                    <div className="flex-cell-sidebar ">
                        <Link className="flex-item-sidebar first-player" to='/personal' onClick={this.handleUserSwitch} >
                            <h3>{this.props.name}</h3>
                            <ContestantCompletion weight={this.props.weight} goal={this.props.goal} user_id={this.props.user_id} name={this.props.name}/>
                        </Link>
                    </div>
                </>
        )
    }
}

export default Contestant
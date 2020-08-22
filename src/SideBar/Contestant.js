import React from "react";
import {Link, BrowserRouter} from "react-router-dom";
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
                        <Link className={`flex-item-sidebar ${this.props.className}`}  to='/personal' onClick={this.handleUserSwitch} >
                            <h3 className={this.props.player}>{this.props.name}</h3>
                            <ContestantCompletion weight={this.props.weight} goal={this.props.goal} user_id={this.props.user_id} name={this.props.name} player={this.props.player} />
                        </Link>
                    </div>
                </>
        )
    }
}

export default Contestant
import React from "react";
import "./bingo.css"
import { Link } from "react-router-dom";

class Bingo extends React.Component {

    render () {
        return (
            <Link to='/personal/bingo'>
            <div>Bingo Board</div>
            </Link>
        )
    }
}

export default Bingo
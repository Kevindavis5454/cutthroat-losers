import React from "react";
import "./chat.css"
import { Link } from "react-router-dom";

class Chat extends React.Component {

    render () {

        return (
            <Link to='/personal/chat'>
            <div>Chat Window</div>
            </Link>
        )
    }
}

export default Chat
import React from "react";
import {Link, BrowserRouter} from "react-router-dom";


class Footer extends React.Component {

    handleBack = () => {
        this.props.history.goBack();
    }

    render () {

        return (
            <>
                <nav className='large-screen-nav'>
                    <BrowserRouter>
                    <ul className='nav'>
                        <li><Link onClick={this.handleBack} to='#'>Last Page</Link></li>
                    </ul>
                    </BrowserRouter>
                </nav>
            </>
        )
    }
}

export default Footer
import React from "react";
import { Route } from 'react-router-dom'
import About from "./About";
import HowToUse from "./HowToUse";
import Rules from "./Rules";
import SidebarHome from "../SideBar/SidebarHome";

class LandingPage extends React.Component {

    render () {

        return (
            <>
                <div className='personal-sidebar'>
                    <Route exact path='/' component={SidebarHome} />
                    <Route path='/landing' component={SidebarHome} />
                </div>
                <div className='personal-content'>
                    <Route exact path='/' component={About} />
                    <Route path='/landing/howtouse' component={HowToUse} />
                    <Route path='/landing/rules' component={Rules} />
                </div>
            </>
        )
    }
}

export default LandingPage
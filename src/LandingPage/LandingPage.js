import React from "react";
import { Route, BrowserRouter } from 'react-router-dom'
import About from "./About";
import HowToUse from "./HowToUse";
import Rules from "./Rules";
import SidebarHome from "../SideBar/SidebarHome";
import ContestSelectModal from "../Modal/Modal"

class LandingPage extends React.Component {


    render () {

        return (
            <>
                <div className='personal-sidebar'>
                    <Route exact path='/'
                           render={routeProps => (
                               <SidebarHome
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                    <Route path='/landing'
                           render={routeProps => (
                               <SidebarHome
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                </div>
                <div><ContestSelectModal /></div>
                <div className='personal-content'>
                    <Route exact path='/'
                           render={routeProps => (
                               <About
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                    <Route path='/landing/howtouse'
                           render={routeProps => (
                               <HowToUse
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                    <Route path='/landing/rules'
                           render={routeProps => (
                               <Rules
                                   {...this.props}
                                   {...routeProps}
                               />
                           )}
                    />
                </div>
            </>
        )
    }
}

export default LandingPage
import React from "react";
import { Route } from 'react-router-dom'
import WeightTracking from "../WeightTracking/WeightTracking";
import PersonalPageHome from "./PersonalPageHome";
import WorkoutTracking from "../WorkoutTracking/WorkoutTracking";
import PersonalSabotages from "../PersonalSabotages/PersonalSabotages";
import Points from "../Points/Points";
import Contact from "../ContactPage/Contact";
import Home from "../Home/Home";
import Sidebar from "../SideBar/Sidebar";
import Rules from "../LandingPage/Rules";
import config from "../config";
import ApiContext from "../ApiContext";

class PersonalPage extends React.Component {

    static contextType = ApiContext;

    componentDidMount() {


        const contestInfo = {
            contest_id: this.context.contest_id,
        }

        Promise.all([
            fetch(`${config.API_ENDPOINT}/api/contestInfo/measurements?contest_id=${contestInfo.contest_id}`),
            fetch(`${config.API_ENDPOINT}/api/contestInfo/weighins?contest_id=${contestInfo.contest_id}`),
            fetch(`${config.API_ENDPOINT}/api/contestInfo/points?contest_id=${contestInfo.contest_id}`),
            fetch(`${config.API_ENDPOINT}/api/contestInfo/sabotages?contest_id=${contestInfo.contest_id}`)
        ])
            .then(([measurementsRes, weighinsRes, pointsRes, sabotagesRes]) => {
                if (!measurementsRes.ok)
                    return measurementsRes.json().then(e => Promise.reject(e))
                if (!weighinsRes.ok)
                    return weighinsRes.json().then(e => Promise.reject(e))
                if (!pointsRes.ok)
                    return pointsRes.json().then(e => Promise.reject(e))
                if (!sabotagesRes.ok)
                    return sabotagesRes.json().then(e => Promise.reject(e))

                return Promise.all([
                    measurementsRes.json(),
                    weighinsRes.json(),
                    pointsRes.json(),
                    sabotagesRes.json(),
                ])
            })
            .then(([measurements, weighins, points, sabotages]) => {
                this.context.measurements = measurements
                this.context.weights = weighins
                this.context.points = points
                this.context.sabotages = sabotages
                console.log(this.context)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <>
                <div className='personal-sidebar'>
                <Route path='/personal'
                       render={routeProps => (
                           <Sidebar
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                </div>
                <div className='personal-content'>
                <Route exact path='/personal'
                       render={routeProps => (
                           <PersonalPageHome
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/weighttracker'
                       render={routeProps => (
                           <WeightTracking
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/workouttracker'
                       render={routeProps => (
                           <WorkoutTracking
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/sabotages'
                       render={routeProps => (
                           <PersonalSabotages
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/points'
                       render={routeProps => (
                           <Points
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/contact' component={Contact} />
                <Route path='/personal/home'
                       render={routeProps => (
                           <Home
                               {...this.props}
                               {...routeProps}
                           />
                       )}
                />
                <Route path='/personal/rules' component={Rules} />
                </div>
            </>
        )

    }
}

export default PersonalPage


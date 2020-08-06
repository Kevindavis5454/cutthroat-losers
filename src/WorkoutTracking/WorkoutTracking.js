import React from "react";
import "./workouttracking.css"
import { VictoryChart, VictoryBar } from 'victory'
import config from "../config";
import moment from "moment";

class WorkoutTracking extends React.Component {

    state = {
        strengthWorkouts: [],
        cardioWorkouts: {}
    }

    componentDidMount() {

        const getUserStrengthWorkouts = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUserWorkouts?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}&category=strength`)
                .then(res => res.json())
        }

        getUserStrengthWorkouts()
            .then((workoutData) => {
                const formattedDates = workoutData.map(date => {
                    let dateMoment = moment(date.date_created)
                    return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.category}
                })
                this.setState({
                    strengthWorkouts: formattedDates
                })
                console.log(this.state.strengthWorkouts, 'State Strength formatted Workouts')
                const javascriptFormattedDates = workoutData.map(dateCompare => {
                    let dateFormat = new Date(dateCompare.date_created)
                    return {x: {dateFormat}, y: dateCompare.category}
                })
                console.log(javascriptFormattedDates, 'JS dates')
            })

        const getUserCardioWorkouts = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUserWorkouts?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}&category=cardio`)
                .then(res => res.json())
        }

        getUserCardioWorkouts()
            .then((workoutData) => {
                const formattedDates = workoutData.map(date => {
                    let dateMoment = moment(date.date_created)
                    return {x: `${dateMoment.format('YYYY/MM/DD')}`, y: date.category}
                })
                this.setState({
                    cardioWorkouts: formattedDates
                })
                console.log(this.state.cardioWorkouts, 'State Cardio formatted Workouts')
            })


    }

    render () {
        return (
            <>
                <div className="workout-box-div">
                    <h3 className='player1'>Kevin's Workout Tracking</h3>
                </div>
                <div className='workout-buttons'>
                    <button className='glow-on-hover button-left'>Strength Workout</button>
                    <button className='glow-on-hover button-right'>Cardio Workout</button>
                </div>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h3>Strength Workouts</h3>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: { fill: "#bc4123" },
                                    }}
                                    data = {[
                                        {x: "Week 1", y: 14},
                                        {x: "Week 2", y: 10},
                                        {x: "Week 3", y: 3},
                                        {x: "Week 4", y: 12}
                                    ]}

                                />
                            </VictoryChart>
                        </div>
                    </div>
                        <div className='flex-cell-workout'>
                            <div className='flex-item-workout'>
                                <h3>Cardio Workouts</h3>
                                <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                    <VictoryBar
                                        labels={({ datum }) => datum.y }
                                        style={{
                                            data: {fill: "#ffce54"},
                                        }}
                                        data = {[
                                            {x: "Week 1", y: 4},
                                            {x: "Week 2", y: 3},
                                            {x: "Week 3", y: 5},
                                            {x: "Week 4", y: 6}
                                        ]}

                                    />
                                </VictoryChart>
                            </div>
                    </div>
                </div>
                </>
        )
    }
}

export default WorkoutTracking
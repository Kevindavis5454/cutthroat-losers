import React from "react";
import "./workouttracking.css"
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'
import config from "../config";

class WorkoutTracking extends React.Component {

    state = {
        name: [],
        strengthWorkouts: [],
        cardioWorkouts: [],
        week1Strength: [],
        week2Strength: [],
        week3Strength: [],
        week4Strength: [],
        week5Strength: [],
        week6Strength: [],
        week7Strength: [],
        week8Strength: [],
        week9Strength: [],
        week10Strength: [],
        week11Strength: [],
        week12Strength: [],
        week1Cardio: [],
        week2Cardio: [],
        week3Cardio: [],
        week4Cardio: [],
        week5Cardio: [],
        week6Cardio: [],
        week7Cardio: [],
        week8Cardio: [],
        week9Cardio: [],
        week10Cardio: [],
        week11Cardio: [],
        week12Cardio: [],

    }

    componentDidMount() {

        Date.prototype.addDays = function(days) {
            let date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        let newDate = new Date(localStorage.getItem("contest StartDate"));

        const getUserStrengthWorkouts = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUserWorkouts?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}&category=strength`)
                .then(res => res.json())
        }

        getUserStrengthWorkouts()
            .then((workoutData) => {
                const javascriptFormattedDates = workoutData.map(dateCompare => {
                    return new Date(dateCompare.date_created)
                })

                const jsDateSort = () => {
                    javascriptFormattedDates.map(date => {
                        if (date < newDate.addDays(7)) {
                            return this.state.week1Strength.push(date)
                        }
                        if (date >= newDate.addDays(7) && date < newDate.addDays(14)) {
                            return this.state.week2Strength.push(date)
                        }
                        if (date >= newDate.addDays(14) && date < newDate.addDays(21)) {
                            return this.state.week3Strength.push(date)
                        }
                        if (date >= newDate.addDays(21) && date < newDate.addDays(28)) {
                            return this.state.week4Strength.push(date)
                        }
                        if (date >= newDate.addDays(28) && date < newDate.addDays(35)) {
                            return this.state.week5Strength.push(date)
                        }
                        if (date >= newDate.addDays(35) && date < newDate.addDays(42)) {
                            return this.state.week6Strength.push(date)
                        }
                        if (date >= newDate.addDays(42) && date < newDate.addDays(49)) {
                            return this.state.week7Strength.push(date)
                        }
                        if (date >= newDate.addDays(49) && date < newDate.addDays(56)) {
                            return this.state.week8Strength.push(date)
                        }
                        if (date >= newDate.addDays(56) && date < newDate.addDays(63)) {
                            return this.state.week9Strength.push(date)
                        }
                        if (date >= newDate.addDays(63) && date < newDate.addDays(70)) {
                            return this.state.week10Strength.push(date)
                        }
                        if (date >= newDate.addDays(70) && date < newDate.addDays(77)) {
                            return this.state.week11Strength.push(date)
                        }
                        if (date >= newDate.addDays(77) && date < newDate.addDays(84)) {
                            return this.state.week12Strength.push(date)
                        }
                    })
                }
                jsDateSort()
            })

        const getUserCardioWorkouts = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/contestUserWorkouts?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}&category=cardio`)
                .then(res => res.json())
        }

        getUserCardioWorkouts()
            .then((workoutData) => {
                const javascriptFormattedDates = workoutData.map(dateCompare => {
                    return new Date(dateCompare.date_created)
                })

                const jsDateSort = () => {
                    javascriptFormattedDates.map(date => {
                        if (date < newDate.addDays(7)) {
                            return this.state.week1Cardio.push(date)
                        }
                        if (date >= newDate.addDays(7) && date < newDate.addDays(14)) {
                            return this.state.week2Cardio.push(date)
                        }
                        if (date >= newDate.addDays(14) && date < newDate.addDays(21)) {
                            return this.state.week3Cardio.push(date)
                        }
                        if (date >= newDate.addDays(21) && date < newDate.addDays(28)) {
                            return this.state.week4Cardio.push(date)
                        }
                        if (date >= newDate.addDays(28) && date < newDate.addDays(35)) {
                            return this.state.week5Cardio.push(date)
                        }
                        if (date >= newDate.addDays(35) && date < newDate.addDays(42)) {
                            return this.state.week6Cardio.push(date)
                        }
                        if (date >= newDate.addDays(42) && date < newDate.addDays(49)) {
                            return this.state.week7Cardio.push(date)
                        }
                        if (date >= newDate.addDays(49) && date < newDate.addDays(56)) {
                            return this.state.week8Cardio.push(date)
                        }
                        if (date >= newDate.addDays(56) && date < newDate.addDays(63)) {
                            return this.state.week9Cardio.push(date)
                        }
                        if (date >= newDate.addDays(63) && date < newDate.addDays(70)) {
                            return this.state.week10Cardio.push(date)
                        }
                        if (date >= newDate.addDays(70) && date < newDate.addDays(77)) {
                            return this.state.week11Cardio.push(date)
                        }
                        if (date >= newDate.addDays(77) && date < newDate.addDays(84)) {
                            return this.state.week12Cardio.push(date)
                        }
                    })
                }
                jsDateSort()
            })
        const getUserInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/contestInfo/weightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        getUserInfo()
            .then(([weightStats]) => {
                this.setState({
                    name: weightStats.display_name
                })

            })
    }


    render () {

        return (
            <>
                <div className="workout-box-div">
                    <h3 className='player1'>{this.state.name}'s Workout Tracking</h3>
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
                                        labels: {fill: '#FFFFFF'}
                                    }}
                                    data = {[
                                        {x: "Week 1", y: this.state.week1Strength.length},
                                        {x: "Week 2", y: this.state.week2Strength.length},
                                        {x: "Week 3", y: this.state.week3Strength.length},
                                        {x: "Week 4", y: this.state.week4Strength.length},
                                        {x: "Week 5", y: this.state.week5Strength.length},
                                        {x: "Week 6", y: this.state.week6Strength.length},
                                        {x: "Week 7", y: this.state.week7Strength.length},
                                        {x: "Week 8", y: this.state.week8Strength.length},
                                    ]}

                                />
                                <VictoryAxis
                                    dependentAxis
                                    label="Weight"
                                    style={{
                                        axisLabel: { fontSize: 16, padding: 32},
                                    }}
                                />
                                <VictoryAxis
                                    label='Date'
                                    style={{ axis: { stroke: '#000' },
                                        axisLabel: { fontSize: 16, padding: 36},
                                        ticks: { stroke: '#000' },
                                        tickLabels: { fontSize: 14, padding: 2, angle:45, verticalAnchor: 'middle', textAnchor:'start' }
                                    }}

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
                                            labels: {fill: '#FFFFFF'}
                                        }}
                                        data = {[
                                            {x: "Week 1", y: this.state.week1Cardio.length},
                                            {x: "Week 2", y: this.state.week2Cardio.length},
                                            {x: "Week 3", y: this.state.week3Cardio.length},
                                            {x: "Week 4", y: this.state.week4Cardio.length},
                                            {x: "Week 5", y: this.state.week5Cardio.length},
                                            {x: "Week 6", y: this.state.week6Cardio.length},
                                            {x: "Week 7", y: this.state.week7Cardio.length},
                                            {x: "Week 8", y: this.state.week8Cardio.length},
                                        ]}

                                    />
                                    <VictoryAxis
                                        dependentAxis
                                        label="Weight"
                                        style={{
                                            axisLabel: { fontSize: 16, padding: 32},
                                        }}
                                    />
                                    <VictoryAxis
                                        label='Date'
                                        style={{ axis: { stroke: '#000' },
                                            axisLabel: { fontSize: 16, padding: 36},
                                            ticks: { stroke: '#000' },
                                            tickLabels: { fontSize: 14, padding: 2, angle:45, verticalAnchor: 'middle', textAnchor:'start' }
                                        }}

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
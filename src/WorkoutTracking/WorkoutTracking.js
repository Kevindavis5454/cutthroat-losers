import React from "react";
import "./workouttracking.css"
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'
import config from "../config";
import ApiContext from "../ApiContext";

class WorkoutTracking extends React.Component {

    static contextType = ApiContext;

    state = {
        name: [],
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
            return fetch(`${config.API_ENDPOINT}/api/workouts/getWorkoutData?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}&category=strength`)
                .then(res => res.json())
        }

        getUserStrengthWorkouts()
            .then((workoutData) => {
                const javascriptFormattedDates = workoutData.map(dateCompare => {
                    return new Date(dateCompare.date_created)
                })

                const week1Data = []
                const week2Data = []
                const week3Data = []
                const week4Data = []
                const week5Data = []
                const week6Data = []
                const week7Data = []
                const week8Data = []
                const week9Data = []
                const week10Data = []
                const week11Data = []
                const week12Data = []

                const strengthDateSort = () => {
                    javascriptFormattedDates.map(date => {
                        if (date < newDate.addDays(7)) {
                            return week1Data.push(date)
                        }
                        if (date >= newDate.addDays(7) && date < newDate.addDays(14)) {
                            return week2Data.push(date)
                        }
                        if (date >= newDate.addDays(14) && date < newDate.addDays(21)) {
                            return week3Data.push(date)
                        }
                        if (date >= newDate.addDays(21) && date < newDate.addDays(28)) {
                            return week4Data.push(date)
                        }
                        if (date >= newDate.addDays(28) && date < newDate.addDays(35)) {
                            return week5Data.push(date)
                        }
                        if (date >= newDate.addDays(35) && date < newDate.addDays(42)) {
                            return week6Data.push(date)
                        }
                        if (date >= newDate.addDays(42) && date < newDate.addDays(49)) {
                            return week7Data.push(date)
                        }
                        if (date >= newDate.addDays(49) && date < newDate.addDays(56)) {
                            return week8Data.push(date)
                        }
                        if (date >= newDate.addDays(56) && date < newDate.addDays(63)) {
                            return week9Data.push(date)
                        }
                        if (date >= newDate.addDays(63) && date < newDate.addDays(70)) {
                            return week10Data.push(date)
                        }
                        if (date >= newDate.addDays(70) && date < newDate.addDays(77)) {
                            return week11Data.push(date)
                        }
                        if (date >= newDate.addDays(77) && date < newDate.addDays(84)) {
                            return week12Data.push(date)
                        }
                    })
                }
                strengthDateSort()
                this.setState({
                    week1Strength: week1Data,
                    week2Strength: week2Data,
                    week3Strength: week3Data,
                    week4Strength: week4Data,
                    week5Strength: week5Data,
                    week6Strength: week6Data,
                    week7Strength: week7Data,
                    week8Strength: week8Data,
                    week9Strength: week9Data,
                    week10Strength: week10Data,
                    week11Strength: week11Data,
                    week12Strength: week12Data
                })
            })

        const getUserCardioWorkouts = () => {
            return fetch(`${config.API_ENDPOINT}/api/workouts/getWorkoutData?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}&category=cardio`)
                .then(res => res.json())
        }

        getUserCardioWorkouts()
            .then((workoutData) => {
                const javascriptFormattedDates = workoutData.map(dateCompare => {
                    return new Date(dateCompare.date_created)
                })

                const week1Data = []
                const week2Data = []
                const week3Data = []
                const week4Data = []
                const week5Data = []
                const week6Data = []
                const week7Data = []
                const week8Data = []
                const week9Data = []
                const week10Data = []
                const week11Data = []
                const week12Data = []

                const cardioDateSort = () => {
                    javascriptFormattedDates.map(date => {
                        if (date < newDate.addDays(7)) {
                            return week1Data.push(date)
                        }
                        if (date >= newDate.addDays(7) && date < newDate.addDays(14)) {
                            return week2Data.push(date)
                        }
                        if (date >= newDate.addDays(14) && date < newDate.addDays(21)) {
                            return week3Data.push(date)
                        }
                        if (date >= newDate.addDays(21) && date < newDate.addDays(28)) {
                            return week4Data.push(date)
                        }
                        if (date >= newDate.addDays(28) && date < newDate.addDays(35)) {
                            return week5Data.push(date)
                        }
                        if (date >= newDate.addDays(35) && date < newDate.addDays(42)) {
                            return week6Data.push(date)
                        }
                        if (date >= newDate.addDays(42) && date < newDate.addDays(49)) {
                            return week7Data.push(date)
                        }
                        if (date >= newDate.addDays(49) && date < newDate.addDays(56)) {
                            return week8Data.push(date)
                        }
                        if (date >= newDate.addDays(56) && date < newDate.addDays(63)) {
                            return week9Data.push(date)
                        }
                        if (date >= newDate.addDays(63) && date < newDate.addDays(70)) {
                            return week10Data.push(date)
                        }
                        if (date >= newDate.addDays(70) && date < newDate.addDays(77)) {
                            return week11Data.push(date)
                        }
                        if (date >= newDate.addDays(77) && date < newDate.addDays(84)) {
                            return week12Data.push(date)
                        }
                    })
                }
                cardioDateSort()

                this.setState({
                    week1Cardio: week1Data,
                    week2Cardio: week2Data,
                    week3Cardio: week3Data,
                    week4Cardio: week4Data,
                    week5Cardio: week5Data,
                    week6Cardio: week6Data,
                    week7Cardio: week7Data,
                    week8Cardio: week8Data,
                    week9Cardio: week9Data,
                    week10Cardio: week10Data,
                    week11Cardio: week11Data,
                    week12Cardio: week12Data
                })
            })
        const getUserInfo = () => {
            return fetch(`${config.API_ENDPOINT}/api/currentstats/contestUserId/weightPageStats?contest_id=${localStorage.getItem("contest Id")}&user_id=${localStorage.getItem("user Id")}`)
                .then(res => res.json())
        }

        getUserInfo()
            .then(([weightStats]) => {
                this.setState({
                    name: weightStats.display_name
                })

            })
    }

    renderPlayername = () => {
        if (this.state.name == localStorage.getItem("player1")) {
            return "player1"
        }
        if (this.state.name == localStorage.getItem("player2")) {
            return "player2"
        }
        if (this.state.name == localStorage.getItem("player3")) {
            return "player3"
        }
        if (this.state.name == localStorage.getItem("player4")) {
            return "player4"
        }
    }

    renderPlayerColor = () => {
        if (this.state.name == localStorage.getItem("player1")) {
            return "#34bf49"
        }
        if (this.state.name == localStorage.getItem("player2")) {
            return "#da4453"
        }
        if (this.state.name == localStorage.getItem("player3")) {
            return "#ffce54"
        }
        if (this.state.name == localStorage.getItem("player4")) {
            return "#48cfad"
        }
    }

    handleStrengthSubmit = e => {
        e.preventDefault()
        const strengthWorkout = {
            contest_id: parseInt(localStorage.getItem("contest Id")),
            user_id: parseInt(localStorage.getItem("user Id")),
            category: document.getElementById("strength").name
        }
        const pointAddWorkoutStrength = {
            contest_id: parseInt(localStorage.getItem("contest Id")),
            user_id: parseInt(localStorage.getItem("user Id")),
            category: document.getElementById("strength").name,
            points: 1,
            win_id: 3,
        }
        fetch(`${config.API_ENDPOINT}/api/workouts`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(strengthWorkout),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                else {
                    alert("Your Strength Workout has been recorded. Great Job!")
                }
            })
            .catch(error => {
                console.error({error})
            })
        fetch(`${config.API_ENDPOINT}/api/points/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(pointAddWorkoutStrength),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                else {
                    alert("Your 1 point has been added for your workout, Great Job!")
                }
            })
            .catch(error => {
                console.error({error})
            })
    }

    handleCardioSubmit = e => {
        e.preventDefault()
        const cardioWorkout = {
            contest_id: parseInt(localStorage.getItem("contest Id")),
            user_id: parseInt(localStorage.getItem("user Id")),
            category: document.getElementById("cardio").name
        }
        const pointAddWorkoutCardio = {
            contest_id: parseInt(localStorage.getItem("contest Id")),
            user_id: parseInt(localStorage.getItem("user Id")),
            category: document.getElementById("cardio").name,
            points: 1,
            win_id: 3,
        }
        fetch(`${config.API_ENDPOINT}/api/workouts`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(cardioWorkout),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                else {
                    alert("Your Cardio Workout has been recorded. Great Job!")
                }
            })
            .catch(error => {
                console.error({error})
            })
        fetch(`${config.API_ENDPOINT}/api/points/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(pointAddWorkoutCardio),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                else {
                    alert("Your 1 point has been added for your workout, Great Job!")
                }
            })
            .catch(error => {
                console.error({error})
            })

    }

    render () {

        return (
            <>
                <div className="workout-box-div">
                    <h3 className={this.renderPlayername()}>{this.state.name}'s Workout Tracking</h3>
                    <span>Click to log your type of workout completed!</span>
                    <br></br>
                </div>
                <div className='workout-buttons'>
                    <button onClick={this.handleStrengthSubmit} className='glow-on-hover button-left' name='strength' id='strength'>Strength</button>
                    <button onClick={this.handleCardioSubmit} className='glow-on-hover button-right' name='cardio' id='cardio'>Cardio</button>
                </div>
                <br></br>
                <div className="flex-container-workout">
                    <div className='flex-cell-workout'>
                        <div className='flex-item-workout'>
                            <h3>Strength Workouts</h3>
                            <VictoryChart domainPadding={{ x:20 }} minDomain={{ y: 0 }} maxDomain={{ y: 14}} viewBox="0, 0, width, height" >
                                <VictoryBar
                                    labels={({ datum }) => datum.y }
                                    style={{
                                        data: { fill: this.renderPlayerColor() },
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
                                        tickLabels: {fill: "#5eacee",}
                                    }}
                                />
                                <VictoryAxis
                                    label='Date'
                                    style={{ axis: { stroke: '#000' },
                                        axisLabel: { fontSize: 16, padding: 36},
                                        ticks: { stroke: '#000' },
                                        tickLabels: {fill: "#5eacee", fontSize: 14, padding: 2, angle:45, verticalAnchor: 'middle', textAnchor:'start' }
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
                                            data: {fill: this.renderPlayerColor()},
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
                                            tickLabels: {fill: "#5eacee",}
                                        }}
                                    />
                                    <VictoryAxis
                                        label='Date'
                                        style={{ axis: { stroke: '#000' },
                                            axisLabel: { fontSize: 16, padding: 36},
                                            ticks: { stroke: '#000' },
                                            tickLabels: {fill: "#5eacee", fontSize: 14, padding: 2, angle:45, verticalAnchor: 'middle', textAnchor:'start' }
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
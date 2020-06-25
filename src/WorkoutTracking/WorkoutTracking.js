import React from "react";
import "./workouttracking.css"
import { Link } from "react-router-dom";

class WorkoutTracking extends React.Component {

    render () {
        return (
            <Link to='/personal/workouttracker'>
            <table>
                <thead>
                    <tr>
                        <th>Day of the Week</th>
                        <th>Strength Workout</th>
                        <th>Cardio Workout</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Friday</td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                        <td className='workout-checkbox'><input type="checkbox"></input></td>
                    </tr>
                </tbody>
            </table>
            </Link>
        )
    }
}

export default WorkoutTracking
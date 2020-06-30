import React from 'react'
import './infograph.css'
import InfoItem from './InfoItem'

class Infograph extends React.Component{
    render(){
        let style1 = {
            "--c0": '#178ccd',
            "--c1": "#156599"
        }
        let style2 = {
            "--c0": "#a5c73f", 
            "--c1": "#3e7e27"
        }
        let style3 = {
            "--c0": "#f6c232",
             "--c1": "#eca122"
        }
        let style4 = {
            "--c0": "#d63193",
             "--c1": "#a52178"
        }
        return(
            <div className="infoDiv">                  
                <p className="infoP" style={style1} data-icon="🍇">Current Weight Loss: 15lbs</p>
                <p className="infoP" style={style2} data-icon="🍐">Weekly workouts: 2</p>
                <p className="infoP" style={style3} data-icon="🍋">Active Sabotages: None</p>
                <p className="infoP" style={style4} data-icon="🍒">Points Remaining: 14</p>
            </div>
            
        )
             
    }
}
export default Infograph
import React from 'react'
import './memberlist.css'
import KevinProfile from '../PersonalPage/KevinProfile.JPG'

class MemberList extends React.Component {
    render() {
        return(
            <div className="memberBody">

            
            <article style={{"--idx": "0","--c0": "#b071fe","--c1": "#c08fff","--c2": "#8d5bcc"}}>
                    <img src={KevinProfile} alt='Profile Picture' className='group-pic'></img>
                    <h3 className='group-h3'>Kevin Davis</h3>
                    <p className='group-p'>Current Points: 31</p>
            </article>
            <article style={{"--idx": "1","--c0": "#f88c06","--c1": "#f7a334","--c2": "#c87107"}}>
                    <img src={KevinProfile} alt='Profile Picture' className='group-pic'></img>
                    <h3 className='group-h3'>Katy Davis</h3>
                    <p className='group-p'>Current Points: 29</p>
            </article>
            <article style={{"--idx": "2","--c0": "#b3de15","--c1": "#c2e443","--c2": "#8fb112"}}>
                    <img src={KevinProfile} alt='Profile Picture' className='group-pic'></img>
                    <h3 className='group-h3'>Galen Ritter</h3>
                    <p className='group-p'>Current Points: 38</p>
            </article>
            <article style={{"--idx": "3","--c0": "#e43695","--c1": "#e95eab","--c2": "#b52e78"}}>
                    <img src={KevinProfile} alt='Profile Picture' className='group-pic'></img>
                    <h3 className='group-h3'>Kristina Ritter</h3>
                    <p className='group-p'>Curretn Points: 28</p>
            </article>
            </div>
        )
    }
}
export default MemberList
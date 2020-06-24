import React from "react";
import "./personalpage.css"

class PersonalPage extends React.Component {

    render() {
        return (
            <>
                <div className='personal-menu'>
                    <div className='image-cropper'>
                        <img src={require('./KevinProfile.JPG')} alt='Profile Picture' className='profile-pic'></img>
                    </div>
                    <h3>Kevin Davis</h3>
                    <h4>Current Weight: 246lbs</h4>
                    <h4>Goal Weight: 190lbs</h4>
                </div>
                <hr></hr>
                <div className='personal-content'>
                    <div className="flex-container">
                        <div className="flex-cell">
                            <div className="flex-item">1</div>
                        </div>
                        <div className="flex-cell">
                            <div className="flex-item">2</div>
                        </div>
                        <div className="flex-cell">
                            <div className="flex-item">3</div>
                        </div>
                        <div className="flex-cell">
                            <div className="flex-item">4</div>
                        </div>
                        <div className="flex-cell">
                            <div className="flex-item">5</div>
                        </div>
                        <div className="flex-cell">
                            <div className="flex-item">6</div>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}

export default PersonalPage


import React from 'react'
import "./modal.css"


class ContestSelectModal extends React.Component {

    handleCloseModal = () => {
        document.getElementById('overlay').classList.remove('is-visible')
        document.getElementById('modal').classList.remove('is-visible')
    }

    render(){
        return(
            <div>
            <div className="overlay" id="overlay"></div>
                <div className="modal" id="modal">
                    <button class="modal-close-btn" id="modal-close-btn" onClick={this.handleCloseModal}>
                    <i class="fa fa-times" title="閉じる"></i>
                    </button>
                    Here is a modal
                </div>
            </div>   
        )
    }
}

export default ContestSelectModal
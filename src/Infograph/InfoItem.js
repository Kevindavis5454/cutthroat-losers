import React from 'react'

class InfoItem extends React.Component {
    render(){
        let style = {
            '--slist': `${this.props.item.slist[0]} 0, ${this.props.item.slist[1]}`
        }
        return(
            <div className="infoDiv">
                    <article data-icon={this.props.item.icon} style={style} >
                        <h3>{this.props.item.title}</h3>
                        <p>{this.props.item.ptext}</p>
                    </article>
            </div> 
        )
    }
}

export default InfoItem
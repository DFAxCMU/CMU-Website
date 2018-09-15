import React from 'react'

import question from '../images/orangequestion.png'
import vertLine from '../images/orange-vertline.png'


class AboutQuestion extends React.Component {
    render() {
        return <div className="aboutQuestion">
            <div className="aboutTitle">
                <h3>{ this.props.title }</h3>
                <img className="questionMark" src={ question } alt="" />
            </div>
            <div className="aboutContent">
                <div 
                    className="vertLine" 
                    style={{
                        backgroundImage: 'url(\'' + vertLine + '\')'
                    }} />
                <div className="aboutText">
                    { this.props.children }
                </div>
            </div>
        </div>
    }
}

export default AboutQuestion  

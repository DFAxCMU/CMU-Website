import React from 'react'

class Member extends React.Component {
    render() {
        return <div className="member">
            <div 
                className="memberPicture"
                style={{
                    backgroundImage: 'url(\'' + this.props.picture + '\')'
                }}
            />
            <span className="memberName">{this.props.data.name }</span>
        </div>
    }
}

export default Member  

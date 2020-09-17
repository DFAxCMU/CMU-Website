import React from 'react'

class Project extends React.Component {
    render() {
        return <div className="project">
            <h3 className="projectName">{ this.props.data.project_name }</h3>
            <div className="projectDesc">
                { this.props.data.description}
            </div>
            <span className="projectTeam">
                <b>{ "Contact: " }</b>
                <a href={ this.props.data.contact_email }>
                    { this.props.data.contact_email }
                </a>
            </span>
        </div>
    }
}

export default Project  

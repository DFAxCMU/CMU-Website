import React from 'react'

class Project extends React.Component {
    render() {
        return <div className="project">
            <h3 className="projectName">{ this.props.data.project_name }</h3>
            <div className="projectDesc">
                { this.props.data.description}
            </div>
            <span className="projectTeam">
                <b>Team:</b> { JSON.stringify(this.props.data.team).replace(/['"]+/g, '') }
            </span>
        </div>
    }
}

export default Project  

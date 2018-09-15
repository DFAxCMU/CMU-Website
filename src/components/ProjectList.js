import React from 'react';
import Section from './Section.js';
import Project from './Project.js';

class ProjectList extends React.Component {
    render() {
        return <Section
            id="projects"
            title="Projects"
        >
            {
                this.props.data.edges.map((project) => (
                    <Project
                        key={ project.node.name }
                        data={ project.node }
                    />
                ))
            }
        </Section>
    }
}

export default ProjectList;

import React from 'react'
import Link from 'gatsby-link'

import 'normalize.css';
import '../styles/index.css';

import heroImage from '../images/dfahome2.jpg'
import vertLine from '../images/orange-vertline.png'


import Mission from '../components/Mission.js';
import ProjectList from '../components/ProjectList.js';
import MemberList from '../components/MemberList.js';

class IndexPage extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="index">
            <div className="hero">
                <div 
                    className="heroLogo"
                />
            </div>

            <Mission />

            <ProjectList 
                data={ this.props.data.projects }
            />

            <MemberList 
                data={ this.props.data.members } 
                images={ this.props.data.memberImages }
            />
        </div>
    }
}
export default IndexPage;

export const query = graphql`
    query Query {
        memberImages: allFile(filter:{relativeDirectory:{eq:"images/members"}}) {
            edges{
                node{
                    relativePath,
                    publicURL
                }
            }
        }
        members: allMembersCsv {
            edges {
                node {
                    name
                    picture_file
                    position
                }
            }
        }
        projects: allProjectsCsv {
            edges {
                node {
                    project_name
                    description
                    team
                    contact_email
                }
            }
        }
    }
`;

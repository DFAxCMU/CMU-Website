import React from 'react'
import Section from './Section.js'
import Member from './Member.js'

class MemberList extends React.Component {
    render() {
        const images = this.props.images.edges.reduce((obj, edge) => {
            obj[edge.node.relativePath.substring(15)] = edge.node.publicURL
            return obj
        }, {})
        return <Section 
            id="members" 
            title="Members"
        >
                <div className="membersContainer">
                    { 
                        this.props.data.edges.map(member => (
                            <Member 
                                key={ member.node.name }
                                data={ member.node }
                                picture= { images[member.node.picture_file] }
                            />
                        ))
                    }
                </div>
        </Section>
    }
}

export default MemberList  

import React from 'react'

class Section extends React.Component {
    render() {
        return <div id={ this.props.id } className="section">
            <div className="sectionTitle">
                <h2>{ this.props.title }</h2>
                <div className="horLine" />
            </div>
            { this.props.children }
        </div>
    }
}

export default Section  

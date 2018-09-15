import React from 'react';
import Section from './Section.js';
import AboutQuestion from '../components/AboutQuestion';

class Mission extends React.Component {
    render() {
        return <Section
            id="mission"
            title="Mission"
        >
            <AboutQuestion title="Who are we">
                Design For America @ CMU is a group of interdisciplinary students who are using their unique design and engineering perspectives to confront social issues in innovative ways. By collaborating in teams of students with diverse backgrounds and interests, we develop solutions for overarching social problems.
            </AboutQuestion>
            <AboutQuestion title="What do we do">
                Student-led teams work closely with local community organizations to identify challenging social issues. Through the process of ideating, prototyping, and iterating, we design and develop comprehensive solutions that benefit the broader community.
            </AboutQuestion>
            <AboutQuestion title="Why do we do it">
                We believe that CMU students are some of the brightest and most creative makers in the world. Our goal is to channel this passion and ability to attack a variety of social impact problems at the local and national level.
            </AboutQuestion>
            <AboutQuestion title="How do I get involved">
                Contact us to join a team!
            </AboutQuestion>
        </Section>
    }
}

export default Mission  

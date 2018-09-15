import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="DFA@CMU"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <Header />
        <div>
            { children() }
        </div>
    </div>
)

export default TemplateWrapper

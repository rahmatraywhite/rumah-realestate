import React, { Fragment } from 'react'
import PropertiBaru from './page'
import Navbar from '@/components/Organism/Navbar'
import Footer from '@/components/Organism/Footer'

const LayoutProperti = () => {
    return (
        <Fragment>
            <Navbar />
            <PropertiBaru />
            <Footer />
        </Fragment>
    )
}

export default LayoutProperti

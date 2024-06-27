import Navbar from '@/components/Organism/Navbar'
import React, { Fragment } from 'react'
import AgenPage from './page'
import Footer from '@/components/Organism/Footer'

const layout = () => {
    return (
        <Fragment>
            <Navbar />
            <AgenPage />
            <Footer />
        </Fragment>
    )
}

export default layout

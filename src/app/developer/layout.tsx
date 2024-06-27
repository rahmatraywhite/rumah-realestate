import React, { Fragment } from 'react'
import Developer from './page'
import Navbar from '@/components/Organism/Navbar'
import Footer from '@/components/Organism/Footer'

const layout = () => {
    return (
        <Fragment>
            <Navbar />
            <Developer />
            <Footer />
        </Fragment>
    )
}

export default layout

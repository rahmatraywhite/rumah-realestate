import Footer from '@/components/Organism/Footer'
import Navbar from '@/components/Organism/Navbar'
import React, { Fragment } from 'react'
import SearchPage from './page'

const layout = () => {
    return (
        <Fragment>
            <Navbar />
            <SearchPage />
            <Footer />
        </Fragment>
    )
}

export default layout

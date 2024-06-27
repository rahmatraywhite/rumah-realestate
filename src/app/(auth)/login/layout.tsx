import React from 'react'
import NavAuth from '../_components/NavAuth'
import Login from './page'
import FooterAuth from '../_components/FooterAuth'

const LayoutLogin: React.FC = (): JSX.Element => {
    return (
        <main className="flex flex-col w-full">
            <NavAuth />
            <div className='max-w-7xl my-16 mx-auto'>
                <Login />
            </div>
            <FooterAuth />
        </main>
    )
}

export default LayoutLogin
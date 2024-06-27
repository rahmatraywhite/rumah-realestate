import React from 'react'
import NavAuth from '../_components/NavAuth'
import FooterAuth from '../_components/FooterAuth'
import RegisterPage from './page'

const LayoutLogin: React.FC = (): JSX.Element => {
    return (
        <main className="flex flex-col w-full">
            <NavAuth />
            <div className='max-w-7xl my-16 mx-auto'>
                <RegisterPage />
            </div>
            <FooterAuth />
        </main>
    )
}

export default LayoutLogin
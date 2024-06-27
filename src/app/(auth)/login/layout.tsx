import React from 'react'
import NavAuth from '../_components/NavAuth'
import FooterAuth from '../_components/FooterAuth'
import RootLayout from '@/app/layout'
import RegisterPage from '../register/page'

const LayoutLogin: React.FC = (): JSX.Element => {
    return (
        <RootLayout hideNavbarFooter={true}>
            <NavAuth />
            <div className='max-w-7xl flex justify-center my-16 mx-auto'>
                <RegisterPage />
            </div>
            <FooterAuth />
        </RootLayout>
    )
}

export default LayoutLogin
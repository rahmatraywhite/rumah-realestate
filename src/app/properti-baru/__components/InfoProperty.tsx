import React from 'react'
import CardInfoProperty from './card/CardInfoProperty'

const InfoProperty: React.FC = () => {
    return (
        <main className="w-full my-[62px] py-[52px] px-4 md:px-0 mx-auto bg-[#F6F6F6]">
            <div className="w-full max-w-7xl mx-auto">
                <h1 className='text-accent text-[38px] tracing-[0.7px] font-bold'>Info Properti</h1>
                <p className='text-sm text-accent tracing-[0.277px] mt-[10px]'>Kumpulan artikel menarik seputar dunia properti.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-9">
                    <CardInfoProperty />
                    <CardInfoProperty />
                    <CardInfoProperty />
                </div>
            </div>

        </main>
    )
}

export default InfoProperty

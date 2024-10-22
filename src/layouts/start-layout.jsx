import React, { ReactNode } from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export default function StartLayout({children}) {
    return (
        <div className='px-8 lg:px-36 xl:px-48 py-5 flex flex-col space-y-16'>
            <Navigation/>
            {children}
            <Footer/>
        </div>
    )
}
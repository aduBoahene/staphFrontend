import React from 'react'
import hero from '../bank/hero.jpg'

export default function Hero() {
    return (
        <div 
        className='w-full md:h-auto' style={{backgroundImage: `url(${hero})`, backgroundSize: '100%', backgroundRepeat: 'noRepeat'}}>
            <div className='flex flex-col py-16 px-12 space-y-4'>
                <h3 className='text-6xl text-white font-ubuntu font-bold'>
                    Don't wait for retirement <br/> pots to think about <br/>preparing your own
                </h3>
                <p className='font-bold text-2xl text-white'>
                    100 euros offered for joining a Retirement Savings Plan between <br/> 11/15/2021 and 04/30/2022 inclusive, subject to conditions.
                </p>
                <div className='bg-red-600 p-4 w-36 text-white font-ubuntu rounded-lg font-bold'>
                    Find out more
                </div>
            </div>
            
        </div> 
    )
}

import React from 'react'

export default function CustomerActions({image,action}) {
    return (
        <div>
            <div className='invisible md:visible flex justify-center flex-col space-y-4 content-center md:'>
                <div className=' md:mx-auto'>
                    <span className='hover:animate-bounce'>{image}</span>
                </div>
               
                <div className='font-bold font-ubuntu md:justify-center text-2xl'>
                    {action}
                </div>
            </div>

            <div className='flex flex-col items-center md:invisible'>
               mobile
            </div>
            
        </div>
    )
}

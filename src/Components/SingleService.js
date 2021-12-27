import React from 'react'
import { Link } from 'react-router-dom'


export default function SingleService({image, heading, description,linkText, linkUrl}) {
    return (
                <div className='w-1/5 p-6 space-y-4 shadow-lg mr-8'>
                    <img src={image} />
                    <div className='space-y-4'>
                        <span className='text-3xl font-poppins'>{heading}</span>
                        <p className='font-poppins'>
                            {description}
                        </p>
                    <button className='font-poppins text-red-600 bg-red-400 rounded'>
                        <Link to={linkUrl}>
                            <span className='text-white p-2'>{linkText}</span>
                        </Link>
                    </button>
                        
                    </div>
                </div>
    )
}


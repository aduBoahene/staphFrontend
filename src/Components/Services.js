import React from 'react'
import SingleService from './SingleService'
import one from '../bank/11.jpg'
import two from '../bank/1.jpg'
import three from '../bank/2.jpg'
import four from '../bank/3.jpg'


export default function Services() {
    return (
        <div className='bg-gray-100 p-12' >
            <h2 className='font-poppins font-bold text-3xl'>You wish</h2>
            <div className='md:w-full mx-auto'>
                <div className='w-full md:flex justify-between p-4'>
                    <SingleService
                        image={one} 
                        heading={`Become a Client`} 
                        description={`Get closer to a local bank.Choose the Caisse d'Epargne to advise you`}
                        linkText={`Discover now`}
                        linkUrl={`/becomeaclient`}/>
                    <SingleService 
                        image={two} 
                        heading={`Carry out a real estate project`} 
                        description={`Apply for mortage with a few clicks and recieve a response`}
                        linkText={`Make your request`}
                        linkUrl={`/mortgage`}/>
                    <SingleService 
                        image={three} 
                        heading={`Insure your home`} 
                        description={`Choose insuarance that can be personalised according to your needs`}
                        linkText={`Discover now`}
                        linkUrl={`/insureyourhome`}/>

                </div>
            </div>
            
        </div>
    )
}

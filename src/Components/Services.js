import React from 'react'
import SingleService from './SingleService'
import one from '../bank/11.jpg'
import two from '../bank/1.jpg'
import three from '../bank/2.jpg'
import four from '../bank/digital.jpg'

import five from '../bank/personalBanking.jpg'
import Invest from '../bank/investment.jpeg'

import retire from '../bank/retire.jpg'


export default function Services() {
    return (
        <div className='bg-gray-100 p-12' style={{marginBottom:'-100px'}} >
            <h2 className='font-poppins font-bold text-3xl'>You wish</h2>
            <div className='md:w-full mx-auto'>
                <div className='w-full md:flex flex-wrap justify-between p-4'>
                    <SingleService
                        image={five} 
                        heading={`Personal Banking`} 
                        description={`Savings and Checking Account Options. FNCU Savings and Checking accounts gives you the flexibility to manage your money your way. Pay no monthly maintenance fees
                        Get day-to-day banking with no monthly maintenance.`}
                        linkText={`read more`}
                        linkUrl={`/login`}/>
                    <SingleService 
                        image={Invest} 
                        heading={`Investment`} 
                        description={`A comprehensive wealth strategy guides the entire financial planning process through a customized mix of estate planning, tax planning, investment planning and wealth protection. Uncover your financial goals with our experts. We'll create a plan to get you there.`}
                        linkText={`read more`}
                        linkUrl={`/investment`}/>
                    <SingleService 
                        image={four} 
                        heading={`Online/Digital Banking`} 
                        description={`Bank comfortably, anywhere. Manage your finances with free online and mobile banking. Sign up for digital banking. Manage your accounts with ease wherever you are. You can deposit checks (UK Only), transfer funds, automate bill payments.`}
                        linkText={`read more`}
                        linkUrl={`/login`}/>

                    <SingleService 
                        image={retire} 
                        heading={`Retirment`} 
                        description={`Helping you craft a personalized retirement plan
                        Planning for your retirement needn't be overwhelming or boring. We love helping clients find their financial roadmap. Get in touch with us today. We'll help you set out towards success and support you along the way.`}
                        linkText={`read more`}
                        linkUrl={`/investment`}/>


                </div>
                
            </div>
            
        </div>
    )
}

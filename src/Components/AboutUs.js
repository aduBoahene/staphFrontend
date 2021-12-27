import React from 'react'
import C from '../bank/nAbtUs.jpeg'
import other from '../bank/abtus2.jpeg'



export default function AboutUs() {
    return (
        <div className='w-4/5 mx-auto'>
            <span className='font-poppins underline text-4xl text-red-300 font-bold'>About Us</span><br/>

            <div className='flex justify-between mt-4'>

                <div className='w-2/5'>
                    <img src={C} w-full/>
                </div>
                <div className='w-1/2 flex-end'>
                    <span className='text-xl'>
                    Since 1995,First Nodea Credit Union (FNCU) has been creating banking relationships by focusing on our customer and helping them achieve more for their business, their employees, and the communities they serve.  provides tailored commercial, wealth management, personal and small business financial solutions as well as cross-border banking services to clients.

                        We are strong enough to provide you with everything you need, yet small enough to know you personally and care about you and your family’s prosperity.

                        When you choose First Nodea Credit Union (FNCU), you become a member, not just a customer but Part of a family. A family that works together for everyone’s benefit.

                    </span>
                    
                </div>

            </div>

            <div className='flex justify-between mt-32'>

                <div className='w-2/5'>
                   
                <h6 className='font-poppins font-bold text-2xl'>Our Mission</h6>
                <p className='text-xl'>Contribute to the economic and social well-being of individuals and communities.</p>

                <h6 className='font-poppins font-bold text-2xl mt-4'>Our Vision</h6>
                <p className='text-xl'>First Nodea Credit Union (FNCU) inspires confidence with contemporary financial services offer designed for its members, 
                     while enriching the lives of individuals and communities.
                </p>


                                
                <h6 className='font-poppins font-bold text-2xl mt-4'>Our Values</h6>
                    <ul class="list-disc">
                        <li className='text-xl'>Money serving human development</li>
                        <li className='text-xl'>Personal commitment</li>
                        <li className='text-xl'>Democratic action</li>
                        <li className='text-xl'>Integrity and rigour in the cooperative business</li>
                        <li className='text-xl'>Intercooperation</li>
                    </ul>


                </div>
                <div className='w-1/2'>
                     <img src={other} className='w-full'/>
                </div>

            </div>

        </div>
    )
}

import React from 'react'
import C from '../bank/contactus.jpg'

export default function Contact() {
    return (
        <div className='w-4/5 mx-auto'>
            <img src={C} /><br/>
            <span className='font-poppins underline text-4xl text-red-300'>We Are Here To Help</span><br/>
            <div className='flex justify-between mt-4'>
               
                <div className='w-1/2'>
                    <p className='font-poppins'>
                    For help with your account, or if you simply want information, We love being able to keep you updated with important informations and exciting offers. 
                    We can do this by email, over the phone or even by post.
                     We’re looking forward to finding a solution to meet your unique banking needs.
                    </p><br/>

                    
                    <h6 className='font-poppins font-bold'>Cooperate Headquarters</h6>
                    <br/>

                    
                    <p className='font-poppins'>Burlington Road, Thornton Heath,</p>
                    <p className='font-poppins'> Surrey, UK</p>
                    <br/>


                    <h6 className='font-poppins font-bold'>Branch</h6>
                                            
                     <p>1631 Dickson Avenue, Kelowna,</p>
                     <p>BC V1Y 0B5, Canada</p><br/>

                    <h6 className='font-poppins font-bold'>Phone</h6>
                    <p>(+44)744 141 2843  - UK/Europe Operations</p>
                    <p>(+1)604 337 4483	- Canada/USA Operations</p><br/>
                    <p>Lines are open 09:00–18:00 every day (except for Christmas Day, Boxing Day and New Year's Day)</p>

                </div>
                <div className='w-2/5'>
                <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input  className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                               
                                <div className="w-full md:w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Email
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Phone
                                </label>
                                <input  className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"/>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Zipcode/Postal Code
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                               
                                <div className="w-full md:w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Message
                                </label>
                                <textarea rows={5} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
                                </div>
                            </div>
                         
                           
                           
                            <div className="flex flex-wrap -mx-3 mb-2">

                                <div className="flex flex-wrap mt-3 mb-6 w-full">
                                    <div className="w-full px-3">
                                    <input onClick={()=>alert('hello')} className="appearance-none text-white block w-full bg-red-500 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3" id="grid-password" type="button" value="Send"/>
                                    </div>
                                </div>


                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

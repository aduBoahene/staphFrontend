import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
       

        <footer class="text-center lg:text-left bg-gray-100 text-gray-600 mt-16">
             <div class="text-center p-2 bg-gray-200">
                    <span className='p-2 hover:bg-gray-200 rounded'><Link to="/">Home</Link></span>
                     <span className='p-2 hover:bg-gray-200 rounded'><Link to="/aboutus">About Us</Link></span>
                     <span className='p-2 hover:bg-gray-200 rounded'><Link to="/privacy">Privacy</Link></span>
                     <span className='p-2 hover:bg-gray-200 rounded'><Link to="/privacy">Terms of Use</Link></span>
                     <span className='p-2 hover:bg-gray-200 rounded'><Link to="/contactus">Contact Us</Link></span>
            </div>
    
            <div class="text-center p-2 bg-gray-200">
                <a class="text-gray-600 font-semibold" href="https://mdbootstrap.com/">
                    FNCU&#174; Burlington Road, Thornton Heath, Surrey, UK. (+44)744 141 2843 - UK/Europe
                </a>
            </div>
            <div class="text-center p-4 bg-gray-200">
                <span>© 2021 Copyright:</span>
                <a class="text-gray-600 font-semibold" href="https://mdbootstrap.com/">First Nodea Credit Union. All Rights Reserved</a>
            </div>
        </footer>

    )
}

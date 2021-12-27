import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import bankLogo from "../bank/logo.png"
import HeaderToggle from './HeaderToggle';
import { Link } from 'react-router-dom'


export default function Header() {

    const history = useHistory();

    const {user,isAuthenticated} = useSelector(state => state);
    console.log("user",user)
    
  console.log("role_id",user.role)


    return (
        <div className="flex justify-between items-center sticky top-0 bg-white">
             <div className='p-4'>
                <Link to="/">
                    <span className='font-poppins text-3xl'>fn Credit Union</span>
                </Link>
            </div> 
            <svg xmlns="http://www.w3.org/2000/svg" className="visible h-12 w-12 md:invisible" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>

            <div className='flex items-center invisible md:visible'>
            {user?.role=='1'?(
                 <span className='font-bold mr-4 cursor-pointer font-ubuntu'><Link to="/dashboard">Dashboard</Link></span>
              ):(
                ""
              )}
                <span className='font-bold mr-4 cursor-pointer font-poppins'><Link to="/aboutus">About Us</Link></span>
                <span className='font-bold mr-4 cursor-pointer font-poppins'><Link to="/contactus">Contact Us</Link></span>
                <div className='flex bg-red-600 p-4 cursor-pointer items-center'>{isAuthenticated?(""):(
                    <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                </>
                )
                    }
                    <span className='text-white font-bold font-ubuntu' onClick={()=> history.push('/login')}>
                        {isAuthenticated?(
                            <div className='flex'>
                            <HeaderToggle firstname={`Welcome ${user.firstname}`}/>
                            </div>
                        ):(
                            <p>Personal Space</p>
                        )}
                       
                    </span>
                </div>
            </div>


            
        </div>
    )
}


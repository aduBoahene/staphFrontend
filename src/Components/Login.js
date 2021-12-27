import React from 'react'
import { useFormik } from 'formik';
import 'font-awesome/css/font-awesome.min.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from "axios";
import jwt from 'jsonwebtoken'

import lBack from '../bank/loginBack.jpeg'



export const setCurrentUser=(user)=>{
  return {
    type:"SET_CURRENT_USER",
    payload:user
  }
}


export default function Login() {
    const dispatch = useDispatch();    

    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        onSubmit: (values,{ resetForm }) => {
           axios.post("http://localhost:9090/login",values)
          .then(res =>{
            localStorage.setItem('token', res.data.accessToken);
            dispatch(setCurrentUser(jwt.decode(res.data.accessToken)))
            window.location="/"
          }
          ).catch(err=>{
            console.log("login error",err.response)
          }); 
        },
      });

    return (
        // <div className='bg-[url(`${lBack}`)]'>
            
      <div className='w-full md:h-auto' style={{backgroundImage: `url(${lBack})`}}> 

<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100" style={{marginBottom:'-75px'}} >
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Please Login In
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access to your account
        </div>

        <div className="mt-10">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >E-Mail Address:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

                  {/* <i className="fas fa-at text-blue-500" style={{fontSize:24}}></i> */}
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span className="mr-2 uppercase">Sign In</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <p className='mt-2'>Don't have an account, <strong>
              <Link to="/register">
                Register
              </Link>
              </strong></p>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
      </div>
    </div>

        </div>
    )
}



  
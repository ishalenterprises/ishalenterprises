import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const MenuBar = ({ hideMenu }) => {

  return (
    <div className='fixed inset-0 z-50 overflow-hidden'>

      <div className='absolute inset-0 bg-black/20' onClick={hideMenu}></div>

      <div className='relative flex justify-end h-full w-full'>

        <div className='bg-white w-1/3 h-full flex flex-col '>
          <div className='p-4'>
            <IoArrowBackCircle className='pb-4 text-5xl pr-5' onClick={hideMenu}/>
            <ul className='flex flex-col gap-4'>
              <li className='pl-1'>
                <Link to="/">Home</Link>
              </li>
              <li className='pl-1'>
                <Link to="/about">About</Link>
              </li>
              <li className='pl-1'>Contact</li>
              <li>
                <select
                  // onChange={(e) => {
                  //   const value = e.target.value;
                  //   if (value === "developer") {
                  //     window.location.href = "/developers-auth";
                  //   } else if (value === "user") {
                  //     window.location.href = "/users-auth";
                  //   }
                  // }}
                  className="bg-transparent cursor-pointer outline-none"
                >
                  <option disabled selected>Services</option>
                  {/* <option value="developer">Developer</option>
                  <option value="user">User</option> */}
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
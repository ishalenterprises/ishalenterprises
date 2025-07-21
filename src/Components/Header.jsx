import React, { useState } from 'react'
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';

const Header = () => {

    const [menu, setMenu] = useState(false);

    const hideMenu = () => {
        setMenu(false);
    }

    const showMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <div className='w-full flex bg-white justify-between h-auto py-5 pl-2 md:pl-7 pr-8 md:pr-12 lg:pr-16 sticky top-0 z-50 bg-gradient-to-r from-gray-100 via-gray-200 to-white shadow-md shadow-black'>
                <div className='items-center flex pl-4'>
                    <Link className='cursor-pointer' to='/'>
                        {/* <img
                            src='/logo-animated (2).gif'
                            alt='Logo'
                            className='w-28'
                        /> */}
                        <p className=''>Ishaal Enterprises</p>
                    </Link>
                </div>


                <div className='flex w-1/2 items-center justify-end'>
                    <ul className='hidden md:flex text-lg gap-6'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to='/' >Contact</Link>
                        </li>
                        <li>
                            <select
                                // onChange={(e) => {
                                //     const value = e.target.value;
                                //     if (value === "developer") {
                                //         window.location.href = "/developers-auth";
                                //     } else if (value === "user") {
                                //         window.location.href = "/users-auth";
                                //     }
                                // }}
                                className="bg-transparent cursor-pointer outline-none"
                            >
                                <option disabled selected>Services</option>
                                {/* <option value="developer">Developer</option>
                                <option value="user">User</option> */}
                            </select>
                        </li>
                    </ul>



                    <ul className='flex md:hidden'>
                        <img onClick={showMenu} className='w-5 h-5' src='/icons8-menu-50.png' />
                    </ul>

                </div>

            </div>

            {menu && (
                <MenuBar hideMenu={hideMenu} />
            )}
        </>
    )
}

export default Header
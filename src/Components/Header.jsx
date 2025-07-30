import React, { useState } from 'react'
import MenuBar from './MenuBar';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";


const Header = () => {

    const [menu, setMenu] = useState(false);

    const hideMenu = () => {
        setMenu(false);
    }

    const showMenu = () => {
        setMenu(!menu)
    }

    const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) navigate(`/services/${value}`);
  };

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
                        <p className='text-[rgb(54,137,185)] text-lg md:text-xl'>Ishaal Enterprises</p>
                    </Link>
                </div>


                <div className='flex w-1/2 items-center justify-end'>
                    <ul className='hidden md:flex text-[rgb(54,137,185)] text-lg gap-6'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to='/contact' >Contact</Link>
                        </li>
                        <li>
                            <select
  onChange={handleChange}
  className="bg-transparent cursor-pointer outline-none text-[rgb(54,137,185)] w-[100px] overflow-hidden text-ellipsis"
>
  <option disabled selected hidden>Services</option>
  <option value="infrastructure-work">Infrastructure Work</option>
  <option value="civil-work">Civil Work</option>
  <option value="site-surveys">Land Surveys</option>
  <option value="maintanence-work">Maintenance Work</option>
  <option value="losrs-surveys">LOSRs & MW</option>
</select>

                        </li>
                    </ul>



                    <ul className='flex md:hidden'>
                        <IoMenu className='text-3xl' onClick={showMenu}/>
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
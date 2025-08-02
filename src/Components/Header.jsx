import React, { useState } from 'react';
import MenuBar from './MenuBar';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(`/services/${path}`);
        setShowServices(false); // close dropdown
    };

    const hideMenu = () => setMenu(false);
    const showMenu = () => setMenu(!menu);

    const services = [
        { name: "Infrastructure Work", path: "infrastructure-work" },
        { name: "Civil Work", path: "civil-work" },
        { name: "Land Surveys", path: "site-surveys" },
        { name: "Maintenance Work", path: "maintanence-work" },
        { name: "LOSRs & MW", path: "losrs-surveys" },
        { name: "DG Rental", path: "dg-rental" },
        { name: "DB & Sunshade Fabrication", path: "db-sunshade-fabrics" },
        { name: "Solar Panel & Structure", path: "solar-work" },
        { name: "Home COnstruction & Renovation", path: "home-construction-renovation" },
        { name: "General Products Supply", path: "general-products" },
    ];

    return (
        <>
            <div className='w-full flex bg-white justify-between h-auto py-2 pl-2 md:pl-7 pr-8 md:pr-12 lg:pr-16 sticky top-0 z-50 bg-gradient-to-r from-gray-100 via-gray-200 to-white shadow-md shadow-black'>
                <div className='items-center flex pl-2 md:pl-4'>
                    <Link className='cursor-pointer' to='/'>
                        <img className='w-[13rem] md:w-auto' src='/logo-ishal-removebg-preview.png' />
                    </Link>
                </div>

                <div className='flex w-1/2 items-center justify-end'>
                    <ul className='hidden md:flex text-xl text-[rgb(37,83,177)] text-lg gap-6 relative'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                        {/* Services Dropdown */}
                        <li className="relative cursor-pointer" onClick={() => setShowServices(!showServices)}>
                            <span>Services</span>
                <span>{showServices ? "▲" : "▼"}</span>
                            {showServices && (
                                <ul className="absolute top-full right-0 mt-2 bg-white border shadow-lg rounded-md w-52 z-50">

                                    {services.map((service, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleNavigate(service.path)}
                                            className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer text-gray-700"
                                        >
                                            {service.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>

                    {/* Mobile Menu Icon */}
                    <ul className='flex md:hidden'>
                        <IoMenu className='text-4xl' onClick={showMenu} />
                    </ul>
                </div>
            </div>

            {/* Mobile Menu */}
            {menu && (
                <MenuBar hideMenu={hideMenu} />
            )}
        </>
    );
};

export default Header;

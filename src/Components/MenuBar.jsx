import React, { useState } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const MenuBar = ({ hideMenu }) => {
  const navigate = useNavigate();
  const [showServices, setShowServices] = useState(false);

  const services = [
    { name: "Infrastructure Work", path: "infrastructure-work" },
    { name: "Civil Work", path: "civil-work" },
    { name: "Land Surveys", path: "site-surveys" },
    { name: "Maintenance Work", path: "maintanence-work" },
    { name: "LOSRs & MW", path: "losrs-surveys" },
    { name: "DG Rental", path: "dg-rental" },
    { name: "DB & Sunshade Fabric", path: "db-sunshade-fabrics" },
    { name: "Solar Panel & Structure", path: "solar-work" },
    { name: "Home Construction & Renovation", path: "home-construction-renovation" },
    { name: "General Products Supply", path: "general-products" },
  ];

  const handleNavigate = (path) => {
    navigate(`/services/${path}`);
    hideMenu();
  };

  return (
    <div className='fixed inset-0 z-50 overflow-hidden'>
      {/* background overlay */}
      <div className='absolute inset-0 bg-black/20' onClick={hideMenu}></div>

      {/* right side menu (w-1/2) */}
      <div className='absolute right-0 top-0 h-full w-1/2 bg-white shadow-lg'>
        <div className='p-4'>
          <IoArrowBackCircle
            className='pb-4 text-5xl text-gray-700 hover:text-blue-600 cursor-pointer'
            onClick={hideMenu}
          />
          <ul className='flex flex-col gap-4 text-gray-800 text-base'>

            <li>
              <Link to="/" onClick={hideMenu}>Home</Link>
            </li>

            <li>
              <Link to="/about" onClick={hideMenu}>About</Link>
            </li>

            <li>
              <Link to="/contact" onClick={hideMenu}>Contact</Link>
            </li>

            {/* Services dropdown */}
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowServices(!showServices)}
              >
                <span>Services</span>
                <span>{showServices ? "▲" : "▼"}</span>
              </div>

              {showServices && (
                <ul className="mt-2 ml-2 space-y-2 text-sm text-gray-700">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      onClick={() => handleNavigate(service.path)}
                      className="cursor-pointer hover:text-blue-600"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

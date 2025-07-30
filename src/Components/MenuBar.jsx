import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const MenuBar = ({ hideMenu }) => {

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) navigate(`/services/${value}`);
  };

  return (
    <div className='fixed inset-0 z-50 overflow-hidden'>

      <div className='absolute inset-0 bg-black/20' onClick={hideMenu}></div>

      <div className='relative flex justify-end h-full w-full'>

        <div className='bg-white w-1/2 h-full flex flex-col '>
          <div className='p-4'>
            <IoArrowBackCircle className='pb-4 text-5xl pr-5' onClick={hideMenu}/>
            <ul className='flex flex-col gap-4'>
              <li className='pl-1'>
                <Link to="/">Home</Link>
              </li>
              <li className='pl-1'>
                <Link to="/about">About</Link>
              </li>
              <li className='pl-1'>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <select
  onChange={handleChange}
  className="bg-transparent cursor-pointer outline-none w-[100px] overflow-hidden text-ellipsis"
>
  <option disabled selected hidden>Services</option>
  <option className='text-sm' value="infrastructure-work">Infrastructure Work</option>
  <option className='text-sm' value="civil-work">Civil Work</option>
  <option className='text-sm' value="site-surveys">Land Surveys</option>
  <option className='text-sm' value="maintanence-work">Maintenance Work</option>
  <option className='text-sm' value="losrs-surveys">LOSRs & MW</option>
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
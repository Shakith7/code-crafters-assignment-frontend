// src/components/Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import userIcon from '../icons/profile-img.png';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex justify-between items-center py-3 px-5  bg-gray-50 rounded-lg border border-gray-200 text-[#764EE8] " aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 text-[#764EE8]">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name}>
              <div className="flex items-center text-[#764EE8] font-semibold">
                <svg className="w-6 h-6 text-[#764EE8]" fill="#764EE8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                {!isLast ? (
                  <Link to={routeTo} className="ml-1 text-base font-medium text-[#764EE8] hover:text-blue-600 md:ml-2 font-semibold ">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Link>
                ) : (
                  <span className="ml-1 text-base font-medium  md:ml-2 text-[#764EE8] font-semibold ">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 mr-10">
          <img src={userIcon} alt="User" className="border-slate-950 w-12 h-12 rounded-full" />
          <div className="flex flex-col">
            <span className="text-base font-medium">Everon Supplies </span>
            <span className="text-sm text-gray-500">bridget@gmail.com</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
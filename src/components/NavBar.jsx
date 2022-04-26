import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar({nombre}) {
  

  return (
    <>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <Link to={"/"} className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Nike Store</Link>
        </div>
        <div>
          <Link to={"/category/air-force"} className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Air Force</Link>
          <Link to={"/category/jordan"} className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Jordan</Link>
          <Link to={"/category/air-max"} className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Air Max</Link>
        </div>
        <div>
          <Link to={'/cart'} ><CartWidget/></Link>
        </div>
      </nav>
     

    </>
  );
}

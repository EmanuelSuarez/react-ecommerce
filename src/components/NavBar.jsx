import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cart/CartWidget';

export default function NavBar({nombre}) {
  

  return (
    <>
      <nav className="flex justify-between mx-4 mt-4 border-b-2 border-grey">
        <div className="mb-2 sm:mb-0">
          <Link to={"/"} className=""><img className='h-12' src="https://pngimg.com/uploads/nike/nike_PNG15.png" alt="logo"/></Link>
        </div>
        <div  >
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

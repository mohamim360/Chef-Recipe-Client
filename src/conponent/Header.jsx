import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-primary' >
       <nav className="d-flex justify-content-between align-items-center  p-3 flex-wrap container">
        <div>
         <h1>ChefRecipe</h1>
        </div>
        <div className=" d-flex flex-wrap ">
          <Link to="/home" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-dark ">Home</li>
          </Link>
          <Link to="/blog" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-dark">Blog</li>
          </Link>
          <Link to="/login" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-dark">Login</li>
          </Link>


          <Link to="/register" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-dark ">
              Register
            </li>
          </Link>

          {/* <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">About</li>
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
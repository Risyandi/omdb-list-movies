import React from 'react';
import {Link} from 'react-router-dom';
import {img} from '../../assets/img';

const NavigationBar = (props) => {

    
    const onClickMenuIcon = () => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
    }

    return (
    <nav className="bg-white shadow-md fixed container mx-auto z-10">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
                <div className="flex space-x-7">
                    <div>
                        {/* Website Logo */}
                        <Link to="/" className="flex items-center py-4 px-2">
                            <img src={img.loadingGhost} alt="Logo" className="h-16 w-16 mr-2"/>
                            <span className="font-semibold text-gray-500 text-lg">OMDB</span>
                        </Link>
                    </div>
                    {/* Primary Navbar items */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</Link>
                        <Link to="/movies/search" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Search</Link>
                    </div>
                </div>
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button" onClick={(e) => onClickMenuIcon()}>
                    <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                </div>
            </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div className="hidden mobile-menu">
            <ul className="">
                <li className="active"><Link href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</Link></li>
                <li><Link href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Search</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default NavigationBar;
       
       
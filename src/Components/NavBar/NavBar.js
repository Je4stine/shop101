import React from 'react';

export default function NavBar() {
  return (
    <nav>
        <a href="/" className="hamburger"> Shop</a>
        <button className='hamburger'>
            <svg
            xmlns="https://www.w3.org/2000/svg"
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='white'
            >
             <path fillRule='evenodd'
             clipRule='evenodd'
             >
            </path>   
            </svg>
        </button>
        <div className='navigation-menu'>
            <ul>
                <li>
                    <a href='/home'> Home</a>
                </li>
                <li>
                    <a href='/about'> About</a>
                </li>
                <li>
                    <a href='/contact'> Contact</a>
                </li>
            </ul>

        </div>
    </nav>
  )
};

import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";
import { MdRoundaboutRight } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <>
    <div className='bg-sky-800 drop-shadow-2xl drop-shadow-black'>
    <header className='bg-white drop-shadow-xl drop-shadow-black max-w-6xl mx-auto'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex    h-12 w-28 rounded-full flex-wrap'>
            <span className='text-sky-900 ml-5'>Pammy</span>
            <span className='text-black font-bold  ml-5 -mt-3'>Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-sky-700 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-sky-300' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
         
            <li className='hidden sm:inline text-black font-bold hover:underline '>
          
             Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-black font-bold hover:underline'>
            About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-black font-bold  hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
    </div>
    </>
  );
}

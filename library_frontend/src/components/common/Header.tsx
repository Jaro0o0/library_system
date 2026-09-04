import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 ${scrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'} transition-all duration-300`}
        >
            <div>
                <h1 className="text-2xl font-bold text-white">
                    <Link to="/">Book Tracker</Link>
                </h1>
            </div>
            <div className='flex gap-6 items-center mr-6'>
                <ul className="flex gap-4">
                    <li className="text-lg font-bold text-white hover:text-green-500 transition-colors">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-lg font-bold text-white hover:text-green-500 transition-colors">
                        <Link to="/categories">Categories</Link>
                    </li>
                    {/* <li className="text-lg font-bold text-white hover:text-green-500 transition-colors">
                        <Link to="/search">Search</Link>
                    </li> */}
                    <li className="text-lg font-bold text-white hover:text-green-500 transition-colors">
                        <Link to="/contact">Faq</Link>
                    </li>
                </ul>
                {/* Buttons */}
                <div className="flex gap-4 border-r-1 border-l-1 border-white px-4">
                    <button className=" text-white ">
                        <Link to="/login" className='text-lg font-bold text-white hover:text-green-500 transition-colors'>Login</Link>
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                        <Link to="/register">Register</Link>
                    </button>
                </div>
                <Link to="/search" className='text-lg font-bold text-white hover:text-green-500 transition-colors'><SearchIcon/></Link>     

                <button onClick={setOpen(prev => !prev)} className='text-white'><MenuIcon/></button>
            </div>
          
        </header>
    )
}

export default Header

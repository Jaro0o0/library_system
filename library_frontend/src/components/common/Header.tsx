import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function Header() {
    const [scrolled, setScrolled] = useState(false)

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
            <div>
                <ul className="flex gap-4">
                    <li className="text-lg font-bold text-white hover:text-green-500 transition-colors">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-lg font-bold text-white hover:text-green-500 transition-colors">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="text-lg font-bold text-white hover:text-green-500 transition-colors">
                        <Link to="/search">Search</Link>
                    </li>
                    <li className="text-lg font-bold text-white hover:text-green-500 transition-colors">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    <Link to="/login">Login</Link>
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    <Link to="/register">Register</Link>
                </button>
            </div>
        </header>
    )
}

export default Header

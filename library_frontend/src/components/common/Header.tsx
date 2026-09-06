import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Container, TextField } from '@mui/material';
import { Button } from '@mui/material';

import Tolkien_Img from '../../assets/images/recommendList/tolkien.jpg'
import usegetUserStatus from '../../hooks/useGetUserStatus';

//Components
import ProfileMenu from './ProfileMenu';
import ShoppingCard from './ShoppingCard';

//hooks
import useGetUser from "../../hooks/useGetUser";

const recomendedAuthorsData = [
    {
        img: Tolkien_Img,
        author: 'Tolkien'
    },
    {
        img: Tolkien_Img,
        author: 'Tolkien'
    },
    {
        img: Tolkien_Img,
        author: 'Tolkien'
    },
    {
        img: Tolkien_Img,
        author: 'Tolkien'
    },
    {
        img: Tolkien_Img,
        author: 'Tolkien'
    },
    {
        img: Tolkien_Img,
        author: 'Tolkien'
    },
    {
        img: Tolkien_Img,
        author: 'Tolkien'
    },
    {
        img: Tolkien_Img,
        author: 'Tolkien'
    },
]



function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [shoppingCardOpen, setShoppingCardOpen] = useState(false);


    const { isUserLogin } = usegetUserStatus();

    const { userName } = useGetUser();

    let user = { id: "" };
    if (isUserLogin) {
        try {
            const token = localStorage.getItem("accessToken");
            if (token) {
                const payload = JSON.parse(atob(token.split(".")[1])) as { nameid?: string };
                user = { id: payload.nameid ?? "" };
            }
        } catch {
            user = { id: "" };
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    //Handlers
    

    return (
    <>
        <header
            className={`fixed  top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 ${scrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'} transition-all duration-300`}
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
                        <Link to="/faq">Faq</Link>
                    </li>
                </ul>
                {/* Buttons */}
                {/* <Button variant="contained" className="!bg-green-400" component={Link} to={`/users/${userName}`}>Profile</Button> */}
                <div className="flex gap-4 border-r-1 border-l-1 border-white px-4">
                    {isUserLogin ?  <Button variant='contained' onClick={() => setProfileOpen(prev => !prev)}>Profile</Button>  : (
                    <div>
                    <button className=" text-white ">
                        <Link to="/login" className='text-lg font-bold text-white hover:text-green-500 transition-colors'>Login</Link>
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                        <Link to="/register">Register</Link>
                    </button>
                    </div> )}
                </div>
                {/* Search_Button */}
                <button onClick={() => setSearchOpen(prev => !prev)} className='text-lg font-bold text-white hover:text-green-500 transition-colors'>{ searchOpen ? <CloseIcon/> : <SearchIcon/> }</button>     

                <button onClick={() => setOpen(prev => !prev)} className='text-white'><MenuIcon/></button>
            </div>
            <Button onClick={() => setShoppingCardOpen(prev => !prev) }>ShoppingCard</Button>
          
        </header>



        {/* Search_Menu */}
        {searchOpen && (
            <div className='fixed top-[70px] left-0 w-full bg-white z-[200] p-6'>
                <Container>
                    <h2>Search</h2>
                    <TextField id="filled-basic" label="Filled" variant="filled"  fullWidth/>

                    <h3 className='mt-8 mb-2'>Recomended Authors for you </h3>
                    {/* Grid */}
                
                    <div className='grid grid-cols-4  gap-4 mb-4'>
                        {recomendedAuthorsData.map((item, index) => {
                            return (
                                <div className='p-2 border-1 border-b-olive-400 bg-slate-50  rounded-md' key={index}>
                                    <div className='flex gap-2 items-center '>
                                        <img src={item.img} alt={item.author} className='w-[50px] h-[50px] object-cover'/>
                                        <span className='font-medium font-bold'>{item.author}</span>
                                    </div>
                                </div>
                            )
                        })}
                    
                    </div>
                    
                    <Button variant='contained'>See all books</Button>
                </Container>
            </div>
        )}

        {/* Profile_Menu */}
        <ProfileMenu open={profileOpen}/>

        {/* Shopping_Card */}
        <ShoppingCard open={shoppingCardOpen}/>

    
        
    </>
    )
}

export default Header

import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Container, TextField } from '@mui/material';
import { Button } from '@mui/material';



//icons
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


//Components
import ProfileMenu from './ProfileMenu';
import ShoppingCard from './ShoppingCard';

//hooks
import useGetUser from "../../hooks/useGetUser";
import usegetUserStatus from '../../hooks/useGetUserStatus';





function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [recomendedAuthorsData ,setrecomendedAuthorsData] = useState([]);
    const [searchBooks,setSearchBooks] = useState<any[]>([]);

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
    const recomendedBooksHandler = async () => {

        const data = await fetch(`http://localhost:5110/search/Books/recomended?userId=${user.id}&count=10`,{

            method: "GET",
            headers: { "Content-Type": "application/json" },
           


        });
    
    }

    useEffect(()=>{
        
        const recomendedBooksHandler = async () => {
        const userId = user.id || "1";
        const res  = await fetch(`http://localhost:5110/search/Books/recomended?userId=${userId}&count=10`,{

            method: "GET",
            headers: { "Content-Type": "application/json" },
           


        });
        if (!res.ok) return;
        const data =  await res.json() 
        console.log(data)

    
    }
    recomendedBooksHandler();

    },[])
    
    //Search Books
    const searchBooksHandler = async ( e ) => {

        const input = e.target.value
        if (!input.trim()) {
            setSearchBooks([])
            return
        }
        const res =  await fetch(`http://localhost:5110/search/Books/search-books?title=${encodeURIComponent(input)}`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }  );
        if (!res.ok) return;
        const data = await res.json();
        setSearchBooks(data)

    }


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
                <div className="flex gap-4 border-r-1 border-l-1 border-white px-4">
                    {isUserLogin ?  <Button variant='contained' onClick={() => setProfileOpen(prev => !prev)}>Profile</Button>  : (
                    <div>
                        {/* User is not logged in */}
                        <div className="flex gap-4">
                            <button className=" text-white ">
                                <Link to="/login" className='text-lg font-bold text-white hover:text-green-500 transition-colors'>Login</Link>
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                                <Link to="/register">Register</Link>
                            </button>
                        </div>
                    </div> )}
                </div>
                {/* Search_Button */}
                <button onClick={() => setSearchOpen(prev => !prev)} className='text-lg font-bold text-white hover:text-green-500 transition-colors'>{ searchOpen ? <CloseIcon/> : <SearchIcon/> }</button>     

                {/* mobile menu button */}
                <button onClick={() => setOpen(prev => !prev)} className='text-white block md:hidden'><MenuIcon/></button>

                {/* Shopping_Card_Button */}
                <button onClick={() => setShoppingCardOpen(prev => !prev) } className='text-lg font-bold text-white hover:text-green-500 transition-colors'>
                    <ShoppingBagIcon  className="hover:!text-green-500"/>
                </button>
            </div>
            
          
        </header>



        {/* Search_Menu */}
        {searchOpen && (
            <div className='fixed top-[70px] left-0 w-full bg-white z-[200] p-6'>
                <Container>
                    <h2>Search</h2>
                    <TextField id="filled-basic" label="Filled" variant="filled"  fullWidth onChange={( e ) =>  searchBooksHandler ( e ) } />

                    <h3 className='mt-8 mb-2'>Recomended Authors for you </h3>
                    {/* Grid */}
                
                     {/* Display search results */}
                     {searchBooks.length > 0 && (
                        <div className='mt-6'>
                            <h3 className='mb-2'>Search results ({searchBooks.length})</h3>
                            <div className='flex flex-col max-h-64 overflow-y-auto gap-2'>
                                {searchBooks.map((book) => (
                                    <div key={book.id} className='p-3 border-1 border-slate-200 rounded-md bg-slate-50'>
                                        <h1 className='text-red-800'>{book.tytul}</h1>
                                        <p className='text-sm text-gray-600'>{book.autor} · {book.gatunek}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {searchBooks.length === 0 && (
                        <p className='mt-6 text-gray-500'>No books found</p>
                    )}
                    
                    <Button variant='contained'>See all books</Button>
                </Container>
            </div>
        )}

        {/* Profile_Menu */}
        <ProfileMenu open={profileOpen}/>

        {/* Shopping_Card */}
        <ShoppingCard open={shoppingCardOpen} onClose={() => setShoppingCardOpen(false)}/>

    
        
    </>
    )
}

export default Header

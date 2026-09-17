import { useState, useEffect,useRef } from 'react'
import { Link } from 'react-router'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Container, TextField } from '@mui/material';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




//icons
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


//Components
import ProfileMenu from './ProfileMenu';
import ShoppingCard from './ShoppingCard';

//hooks
import useGetUser from "../../hooks/useGetUser";
import usegetUserStatus from '../../hooks/useGetUserStatus';

type RecommendedBook = {
    id: number;
    tytul: string;
    autor: string;
};




function Header() {


    const [scrolled, setScrolled] = useState(false)
    const [recomendedAuthorsData ,setrecomendedAuthorsData] = useState([]);
    const [searchBooks,setSearchBooks] = useState<any[]>([]);

    const [searchOpen, setSearchOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [shoppingCardOpen, setShoppingCardOpen] = useState(false);

    const heightRef = useRef<HTMLElement | null>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

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

    //Height
    useEffect(() => {
        if (heightRef.current) {
            setHeaderHeight(heightRef.current.offsetHeight);
        }
    }, []);

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


    //Recomendation
   
    const [reccomedationList, setReccomedationList] = useState<RecommendedBook[]>([]);


    useEffect(  () => {
        const getReccomendation =   async  () => {
                if (!userName) return;

                const res = await fetch(`http://localhost:5110/search/Books/recomended?userName=${ userName }`,{
                method: 'GET',
                });

                if (!res.ok) return;
                const data = await res.json();

                console.log(data);
                setReccomedationList(data);

        }

        getReccomendation();
    },
    
    
    [userName])






    return (
    <>
        <header
            // ${scrolled ? 'bg-white shadow-md ' : 'bg-transparent'}
            className={`fixed  top-0 left-0 right-0 z-[100] flex justify-between items-center py-2 px-6  bg-[#F8FAFC]  text-gray-900    `}
            ref={heightRef}
        >
            <div>
                <h1 className={`text-xl   font-bold`} >
                    <Link to="/"> 📗 Book <span className="text-green-400">Tracker</span></Link>
                </h1>
            </div>
            <div className='flex gap-6 items-center mr-6'>
                <ul className="flex gap-4">
                    <li className="    hover:text-green-500 transition-colors">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="   hover:text-green-500 transition-colors">
                        <Link to="/categories">Categories</Link>
                    </li>
                      <li className="   hover:text-green-500 transition-colors">
                        <Link to="/plans">Plans</Link>
                    </li>
                    <li className="   hover:text-green-500 transition-colors">
                        <Link to="/faq">Faq</Link>
                    </li>
                </ul>


             





                  {/* mobile menu button */}
                {/* <button onClick={() => setOpen(prev => !prev)} className='text-white block md:hidden'><MenuIcon/></button> */}
            </div>


               {/* Buttons */}
                <div className="flex gap-4 border-r-1 border-l-1 border-white px-4">
                    {isUserLogin ?  <button   onClick={() => setProfileOpen(prev => !prev)} className='hover:text-green-500 transition-colors'><AccountCircleIcon/> </button>  : (
                     // User is not logged in 
                        <button  className='hover:text-green-500 transition-colors'><Link to='/login'><AccountCircleIcon/></Link></button>
                    )}
                


                    {/* Search_Button */}
                    <button onClick={() => setSearchOpen(prev => !prev)} className='text-lg font-bold  hover:text-green-500 transition-colors'>{ searchOpen ? <CloseIcon/> : <SearchIcon/> }</button>     


                    {/* Shopping_Card_Button */}
                    <button onClick={() => setShoppingCardOpen(prev => !prev) } className='text-lg font-bold hover:text-green-500 transition-colors'>
                        <ShoppingBagIcon  className="hover:!text-green-500"/>
                    </button>

                </div>
            
          
        </header>



        {/* Search_Menu */}
       
            <div
                style={{ top: headerHeight }}
                className={`fixed left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-[99] py-8 shadow-xl transition-transform duration-500 font-[400] ${searchOpen ? "translate-y-0" : "-translate-y-[500px]"}`}
            >
                <Container>
                    <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">Find your next book</h2>
                    <TextField id="filled-basic" label="Search by title" variant="filled" fullWidth onChange={( e ) =>  searchBooksHandler ( e ) }  
                                                
 sx={{
    '& .MuiFilledInput-root:after': {
      borderBottomColor: '#4ade80', 
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#4ade80', 
    },
    
     }}
                    />

                    <h3 className='mt-8 mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500'>Recommended for you</h3>
                               <Container className="!px-0">
                                    {reccomedationList.length === 0 ? (
                                        <p className="text-slate-500">You don't have recommendations yet</p>
                                    ) : (
                                        reccomedationList.map((book) => (
                                            <div key={book.id} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 mb-2">
                                                <h3 className="font-semibold text-slate-800">{book.tytul}</h3>
                                                <p className="text-sm text-slate-500">{book.autor}</p>
                                            </div>
                                        ))
                                    )}
                                </Container> 
                
                     {/* Display search results */}
                     {searchBooks.length > 0 && (
                        <div className='mt-7'>
                            <h3 className='mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500'>Search results ({searchBooks.length})</h3>
                            <div className='flex flex-col max-h-64 overflow-y-auto gap-2'>
                                {searchBooks.map((book) => (
                                    //Item
                                    <div key={book.id} className='p-4 border border-slate-200 rounded-xl bg-slate-50 hover:border-green-300 hover:bg-green-50 transition-colors'>
                                        <Link className='font-semibold text-green-600 hover:text-green-700' to={`/products/${encodeURIComponent(book.tytul)}`} onClick={() => setSearchOpen(false)}>{book.tytul}</Link>
                                        <p className='text-sm text-gray-600'>{book.autor} · {book.gatunek}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {searchBooks.length === 0 && (
                        <p className='mt-6 text-slate-500'>No books found</p>
                    )}
                    
                    <Button variant='contained' className="!mt-6 !bg-green-400  !px-5">See all books</Button>
                    </div>
                </Container>
            </div>
        

        {/* Profile_Menu */}
        <ProfileMenu open={profileOpen} positionProperty={headerHeight }/>

        {/* Shopping_Card */}
        <ShoppingCard open={shoppingCardOpen} onClose={() => setShoppingCardOpen(false)}/>

    
        
    </>
    )
}

export default Header

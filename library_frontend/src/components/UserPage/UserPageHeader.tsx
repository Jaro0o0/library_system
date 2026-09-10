import { Link } from "react-router";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import IconBox from "../common/IconBox";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";


const categoriesList = [
    {
        name: 'fantasy',
        
    },
    {
        name: 'science fiction',
       
    },
    {
        name: 'horror',
      
    },
    {
        name: 'romance',
      
    },
    {
        name: 'adventure',
       
    },
    {
        name: 'biography',
       
    },
  
    
]



function UserPageHeader() {
    const navigate = useNavigate();

    const logoutHandler =  () => {

        localStorage.removeItem("accessToken");

        navigate("/login");

    }



    return ( 
        <header className="flex justify-between  py-2 px-6 bg-white shadow-md items-center ">
            <div>
                <h1 className="text-xl font-semibold">Books <span className="text-green-400">Tracker</span></h1>
            </div>

            {/* Nav */}
            <div>
                <ul className="flex gap-4 items-center">
                    {categoriesList.map((item,indx)=>(
                        <li key={indx} className="hover:text-green-600 transition-colors duration-300"><Link to={`/categories/${item.name}`}>{item.name}</Link></li>
                    ))}
                </ul>

            </div>


      
          
                {/* Links */}
                <div className=" flex gap-4  items-center">
                    <Link to='/' className="hover:text-green-600 transition-colors duration-300">Home</Link>
                    <Link to='/home' className="hover:text-green-600 transition-colors duration-300">Library</Link>
                    <span onClick={logoutHandler} className="hover:text-green-600 transition-colors duration-300 cursor-pointer">Logout</span>
                </div>
            

        </header>
     );
}

export default UserPageHeader;
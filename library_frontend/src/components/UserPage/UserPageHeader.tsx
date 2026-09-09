import { Link } from "react-router";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import IconBox from "../common/IconBox";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function UserPageHeader() {
    const navigate = useNavigate();

    const logoutHandler =  () => {

        localStorage.removeItem("accessToken");

        navigate("/login");

    }



    return ( 
        <header className="flex justify-between items-center p-4 bg-green-50">
            <div>
                <h1 className="text-xl">Books</h1>
            </div>
            {/* Nav */}
            <div className="flex justify-between w-full max-w-md">
                {/* Links */}
                <div className=" flex gap-2  items-center">
                    <Link to='/'>Home</Link>
                    <Link to='/home'>Library</Link>
                    <Button variant="contained" onClick={logoutHandler}>
                        Logout
                    </Button>
                </div>
                {/* Photo */}
                <div className="flex gap-4">
                    {/* Notifiacanitons */}
                    <IconBox>
                        <NotificationsActiveIcon />
                    </IconBox>
                    <IconBox>
                         <SearchIcon/>
                    </IconBox>
                    
                    {/* ProfilePhoto */}
                    <div>
                        <img src="" alt="user-photo" className="w-15 h-15 rounded-2xl"/>
                    </div>

                </div>
            </div>
        </header>
     );
}

export default UserPageHeader;
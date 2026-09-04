import { Link } from "react-router";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import IconBox from "../common/IconBox";

function UserPageHeader() {
    return ( 
        <header className="flex justify-between items-center p-4 bg-green-50/35">
            <div>
                <h1 className="text-xl">Books</h1>
            </div>
            {/* Nav */}
            <div className="flex justify-between w-full max-w-md">
                {/* Links */}
                <div className=" flex gap-2  items-center">
                    <Link to='/home'>Home</Link>
                    <Link to='/home'>Library</Link>
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
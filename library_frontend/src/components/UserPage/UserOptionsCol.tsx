import { Button } from "@mui/material"
import IconBox from "../../components/common/IconBox";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router';
import useGetUser from "../../hooks/useGetUser";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router";



const iconsData = [

    {
        name:'Dashboard',
        icon: <HomeIcon/>,


    },
    // {
    //     name:'Notifications',
    //     icon: <NotificationsActiveIcon/>,


    // },
    {
        name:'Shopping card',
        icon: <ShoppingCartIcon/>,


    },
    {
        name:'History',
        icon: <HistoryToggleOffIcon/>


    },
    {
        name:'Settings',
        icon: <SettingsIcon/>


    },

]


function UserOptionsCol() {

    const {userName} = useGetUser();

    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("accessToken");
        navigate('login');


    }

  
    return ( 
                    <div className="flex flex-col justify-between p-8 bg-white border-r border-slate-100 shadow-sm">
                        <div className="flex flex-col gap-5">
                                {/* Photo */}
                                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                                   
                                    {/* Text_BOX */}
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-slate-800">{userName}</span>
                                        <span className="text-sm text-slate-400">Member</span>
                                    </div>
                                </div>
                                {/* Icons_BOX */}
                                <div className="flex flex-col gap-1">
                                { iconsData.map((item) => {
                                    return(
                                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 transition-all duration-200 cursor-pointer group" key={item.name} >
                                            <IconBox>
                                                {item.icon}
                                            </IconBox>
                                            <Link  className="text-slate-600 group-hover:text-green-600 transition-colors" to={`/users/${userName}/${item.name}`}>{item.name}</Link>
                                        
                                            
                                        </div>
                                    )
                                    
                                } )}

                                </div>
                            </div>
                        <Button className="!border-green-400 !text-green-400 !rounded-xl !py-2" variant="outlined" onClick={logoutHandler}>Logout</Button>
                    </div>
                        
     );
}

export default UserOptionsCol;

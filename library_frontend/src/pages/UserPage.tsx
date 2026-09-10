import UserPageHeader from "../components/UserPage/UserPageHeader";
import Cto from "../components/UserPage/Cto";
import ActiveRents from "../components/UserPage/ActiveRents";
import UserPageRecomended from "../components/UserPage/UserPageRecomended";
import IconBox from "../components/common/IconBox";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from "@mui/material";



const iconsData = [

    {
        name:'Notifications',
        icon: <NotificationsActiveIcon/>,


    },
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


function UserPage() {
    return (  
        <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-slate-50">
           <UserPageHeader/>
            <div className="flex-1 min-h-0 w-full">
                {/* Grid */}
                <div className="grid grid-cols-[1fr_3fr] h-full">
                    {/* Options */}
                    <div className="flex flex-col justify-between p-8 bg-white border-r border-slate-100 shadow-sm">
                        <div className="flex flex-col gap-5">
                                {/* Photo */}
                                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                                   
                                    {/* Text_BOX */}
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-slate-800">User Name</span>
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
                                            <span className="text-slate-600 group-hover:text-green-600 transition-colors">{item.name}</span>
                                            
                                        </div>
                                    )
                                    
                                } )}

                                </div>
                            </div>
                           
                            <Button className="!border-green-400 !text-green-400 !rounded-xl !py-2" variant="outlined">Logout</Button>

                        
                    </div>
                    {/* Dashboard */}
                    <div className="flex flex-col gap-10 justify-start p-10 overflow-y-auto bg-slate-50/50">
                        {/* <Cto/> */}
                        <h1 className="text-3xl font-semibold text-slate-800">Daschboard</h1>
                        <ActiveRents/>
                        <UserPageRecomended/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
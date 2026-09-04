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
                    <div className=" flex flex-col justify-between p-8 shadow-md  ">
                        <div className="flex flex-col gap-3">
                                {/* Photo */}
                                <div className="flex">
                                    <img src="" alt="profiole-photo" className="h-md w-md"/>
                                    {/* Text_BOX */}
                                    <div>
                                        <span>Uset Name</span>
                                    </div>
                                </div>
                                {/* Icons_BOX */}
                                <div>
                                { iconsData.map((item) => {
                                    return(
                                        <div className="flex gap-2 items-center gap-2 mb-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300" key={item.name} >
                                            <IconBox>
                                                {item.icon}
                                            </IconBox>
                                            <span >{item.name}</span>
                                            
                                        </div>
                                    )
                                    
                                } )}

                                </div>
                            </div>
                           
                            <Button className="!border-green-400 !text-green-400" variant="outlined">Outlined</Button>

                        
                    </div>
                    {/* Dashboard */}
                    <div className="flex flex-col gap-15 justify-center p-12 overflow-hidden">
                        <Cto/>
                        <ActiveRents/>
                        <UserPageRecomended/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
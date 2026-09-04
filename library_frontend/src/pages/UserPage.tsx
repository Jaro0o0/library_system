import UserPageHeader from "../components/UserPage/UserPageHeader";
import Container from "../components/common/Container";
import Cto from "../components/UserPage/Cto";
import ActiveRents from "../components/UserPage/ActiveRents";
import UserPageRecomended from "../components/UserPage/UserPageRecomended";
import Section from "../components/common/Section";
import IconBox from "../components/common/IconBox";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
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
        <div className="flex flex-col h-screen max-h-screen overflow-hidden">
           <UserPageHeader/>
            <div className="flex-1 min-h-0 w-full">
                {/* Grid */}
                <div className="grid grid-cols-[1fr_4fr] h-full">
                    {/* Options */}
                    <div className=" flex flex-col justify-between p-8">
                        <div className="flex">
                                {/* Photo */}
                                <div className="flex">
                                    <img src="" alt="profiole-photo" className="h-md w-md"/>
                                    {/* Text_BOX */}
                                    <div>
                                        <span>Uset Name</span>
                                    </div>
                                </div>
                            </div>
                            {/* Icons_BOX */}
                            <div>
                               { iconsData.map((item) => {
                                return(
                                    <IconBox>
                                        {item}
                                    </IconBox>
                                )
                                  
                               } )}

                            </div>
                            <Button variant="outlined">Outlined</Button>

                        
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
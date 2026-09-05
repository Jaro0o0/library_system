import useGetUser from '../../hooks/useGetUser';
import SettingsIcon from '@mui/icons-material/Settings';
import IconBox from './IconBox';
import { Button } from '@mui/material';
import { Link } from 'react-router';

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';


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

function ProfileMenu({ open }: { open: boolean }) {
    const { userName } = useGetUser();

    return ( 
        <>
        {open && (
        <div className='fixed top-[70px] z-20 w-full  right-0'>
            <div className='max-w-4xl ml-auto mr-5'>
                    {/* TEXT_BOX */}
                    <div className='p-4 rounded-md shadow-md bg-white'>
                        <img src='' alt='user-img'/>
                        <h2 className='font-bold text-white text-md'>{ userName }</h2>
                        <Button variant="contained" className="!bg-green-400" component={Link} to={`/users/${userName}`}>Go to Profile</Button> 
                    </div>
                    {/* options_box */}
                    <div className='flex flex-col'>
                    {    iconsData.map((item, index) => {
                            return (
                                // Item
                                <div key={index}  className='flex bg-white shadow-md justify-between p-2'>
                                    <IconBox>{item.icon}</IconBox>
                                    <h3>{item.name}</h3>
                                    

                                </div>
                            )
                        })}

                    </div>
            </div>

            
        </div>

        )}
        </>
     );
}

export default ProfileMenu;
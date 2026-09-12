import useGetUser from '../../hooks/useGetUser';
import SettingsIcon from '@mui/icons-material/Settings';
import IconBox from './IconBox';
import { Button } from '@mui/material';
import { Link } from 'react-router';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';


const iconsData = [
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

function ProfileMenu({ open, positionProperty }) {
    const { userName } = useGetUser();

    return ( 
        <>
       
        <div className={`fixed top-[${positionProperty}] z-20 w-[320px] right-5 transition-transform duration-500 ${open ? "translate-y-0" : "-translate-y-[500px]"}`}>

            <div className='bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden'>
                    {/* TEXT_BOX */}
                    <div className='flex flex-col items-center gap-3 p-6 bg-slate-50 border-b border-slate-100'>
                        <span className='text-sm font-medium text-slate-500'>{userName}</span>
                        
                        <Button variant="contained" className="!bg-green-400 !rounded-xl !px-5" component={Link} to={`/users/${userName}`}>Go to Profile</Button> 
                    </div>
                    {/* options_box */}
                    <div className='flex flex-col p-2'>
                    {    iconsData.map((item, index) => {
                            return (
                                // Item
                                <div key={index}  className='flex justify-between items-center px-3 py-3 rounded-xl hover:bg-green-50 transition-all duration-200 cursor-pointer group'>
                                    <IconBox>{item.icon}</IconBox>
                                    <h3 className='text-slate-600 group-hover:text-green-600 transition-colors'>{item.name}</h3>
                                    

                                </div>
                            )
                        })}

                    </div>
            </div>

            
        </div>

  
        </>
     );
}

export default ProfileMenu;

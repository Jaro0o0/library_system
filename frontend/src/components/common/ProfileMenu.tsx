import useGetUser from '../../hooks/useGetUser';
import { useEffect, useRef } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import IconBox from './IconBox';
import { Button } from '@mui/material';
import { Link } from 'react-router';
import type { ProfileMenuProps } from '../../types';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';


function ProfileMenu({ open, positionProperty } : ProfileMenuProps ) {
    const { userName } = useGetUser();
    const iconsData = [
        {
            name:'Shopping card',
            icon: <ShoppingCartIcon className='!text-white'/>,
            link: '/checkout',
        },
        {
            name:'History',
            icon: <HistoryToggleOffIcon className='!text-white'/>,
            link: userName ? `/users/${encodeURIComponent(userName)}/history` : '/login',
        },
        {
            name:'Settings',
            icon: <SettingsIcon className='!text-white'/>,
            link: 'comming-soon',
        },
    ]

    const mountedRef = useRef(false);
    useEffect(() => { mountedRef.current = true }, [])

    const transformValue = open ? 'translateY(0)' : 'translateY(-500px)'
    const transitionValue = mountedRef.current ? 'transform 500ms' : 'none'

    return (
        <>

       <div      className={`
        fixed top-[${positionProperty}]
        z-20 w-[320px] right-5
        ${open ? "translate-y-0" : "-translate-y-[500px]"}
    `}
        style={{ transform: transformValue, transition: transitionValue }}
    >

        <div className='bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden'>
                {/* TEXT_BOX */}
                <div className='flex flex-col items-center gap-3 p-6 bg-slate-50 border-b border-slate-100'>
                    <span className='text-sm font-medium text-slate-500'>{userName}</span>
                    
                    <Button
                        variant="contained"
                        className="!bg-green-400 !rounded-xl !px-5"
                        component={Link}
                        to={userName ? `/users/${encodeURIComponent(userName)}` : '/users/profile'}
                        
                    >
                        Go to Profile
                    </Button>
                </div>
                {/* options_box */}
                <div className='flex flex-col p-2'>
                {    iconsData.map((item, index) => {
                        return (
                            // Item
                            <Link key={index} to={item.link}>
                                <div key={index}  className='flex justify-between items-center px-3 py-3 rounded-xl hover:bg-green-50 transition-all duration-200 cursor-pointer group'>
                                    <IconBox>{item.icon}</IconBox>
                                    <h3 className='text-slate-600 group-hover:text-green-600 transition-colors'>{item.name}</h3>
                                    

                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>

            
        </div>

  
        </>
     );
}

export default ProfileMenu;

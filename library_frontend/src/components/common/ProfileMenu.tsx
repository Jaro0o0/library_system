import { useState, useEffect } from 'react'
import Container from './Container';
import useGetUser from '../../hooks/useGetUser';
import SettingsIcon from '@mui/icons-material/Settings';
import IconBox from './IconBox';


const iconsData = [
    {
        name: 'settings',
        icon: <SettingsIcon/>
    },
]

function ProfileMenu() {
    const [open, setOpen] = useState(false);
    const { userName } = useGetUser();

    return ( 
        {open && (

        <div className='fixed top-[70px]'>
            <Container>
                {/* TEXT_BOX */}
                <div className='p-4 rounded-md shadow-md'>
                    <h2 className='font-bold text-white text-md'>{ userName }</h2>
                </div>
                {/* options_box */}
                <div className='flex flex-col'>
                {    iconsData.map((item, index) => {
                        return (
                            <div key={index}  className='flex bg-white shadow-md justify-between'>
                                <IconBox>{item.icon}</IconBox>
                                <h3>{item.name}</h3>
                                

                            </div>
                        )
                    })}

                </div>
            </Container>

        </div>

        )}
     
     );
}

export default ProfileMenu;
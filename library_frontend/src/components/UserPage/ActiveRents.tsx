import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinearProgress from "@mui/material/LinearProgress";
import Container from '../common/Container';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';


import Temporary_Img from '../../assets/images/temporaryImages/pragmatic-programmer-img.jpg'

function ActiveRents() {

    const progress = 65;

    const cardsData = [
        {
            name : 'name'
        },
        {
            name : 'name'
        },
        {
            name : 'name'
        },
    ]

    return ( 
        <>
       
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {cardsData.map((item,index) => (

                    <div key={index} className='flex flex-col gap-4  bg-white rounded-2xl shadow-md hover:shadow-md transition-shadow duration-300'>
                        <div>
                            <img src={Temporary_Img} alt='book-img' className=' max-h-[200px] w-full object-cover  rounded-t-lg'/> 
                        </div>
                        <div className='p-5'>
                            <div className="bg-white shadow-sm rounded-xl p-4">
                                <span className="font-medium text-slate-600">Title</span>
                                <p className="text-sm text-slate-500 mt-1">Description</p>
                                <p className="flex items-center gap-1 text-sm text-slate-500 mt-2"><CalendarMonthIcon fontSize="small"/>End date</p>
                                <LinearProgress sx={{height: 6, borderRadius: 3}} variant="determinate" value={progress} className="mt-3"/>

                            </div>
                            
                        </div>
                        
                    </div>
                ))}
                











             
            </div>
        
        </>
     );
}

export default ActiveRents;
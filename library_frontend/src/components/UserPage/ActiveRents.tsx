import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinearProgress from "@mui/material/LinearProgress";
import Container from '../common/Container';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

function ActiveRents() {

    const progress = 65;

    return ( 
        <>
       
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
                <div className='flex flex-col  gap-4 p-4 bg-green-50 rounded-2xl shadow-md'>
                    <h2 className='text-2xl'>Active Rents</h2>
                    <div className="bg-white shadom-md rounded-xl">
                        <span>Title</span>
                        <p>Description</p>
                        <p><CalendarMonthIcon/>End date</p>
                        <LinearProgress sx={ {height: 8}} variant="determinate" value={progress} />

                    </div>
                    <div className='flex gap-2 justify-between'>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>  Delete</Button>
                        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                    </div>
                                                              
                                                                      
                </div>

                 <div className='flex flex-col gap-4 p-8 bg-green-50 rounded-2xl shadow-md'>
                    <h2 className='text-2xl'>Active Rents</h2>
                    <div className="bg-white shadom-md rounded-xl">
                        <span>Title</span>
                        <p>Description</p>
                        <p><CalendarMonthIcon/>End date</p>
                        <LinearProgress variant="determinate" value={progress} />

                    </div>
                </div>

                 <div className='flex flex-col gap-4 p-8 bg-green-50 rounded-2xl shadow-md'>
                    <h2 className='text-2xl'>Active Rents</h2>
                    <div className="bg-white shadom-md rounded-xl">
                        <span>Title</span>
                        <p>Description</p>
                        <p><CalendarMonthIcon/>End date</p>
                        <LinearProgress variant="determinate" value={progress} />

                    </div>
                </div>

             
            </div>
        
        </>
     );
}

export default ActiveRents;
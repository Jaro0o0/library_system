import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinearProgress from "@mui/material/LinearProgress";
import Container from '../common/Container';

function ActiveRents() {

    const progress = 65;

    return ( 
        <>
       
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
                <div className='flex flex-col gap-4 p-4 bg-green-300 rounded-2xl shadow-md'>
                    <h2 className='text-2xl'>Active Rents</h2>
                    <div className="bg-white shadom-md rounded-xl">
                        <span>Title</span>
                        <p>Description</p>
                        <p><CalendarMonthIcon/>End date</p>
                        <LinearProgress sx={ {height: 8}} variant="determinate" value={progress} />

                    </div>
                </div>

                 <div className='flex flex-col gap-4 p-8 bg-green-300 rounded-2xl shadow-md'>
                    <h2 className='text-2xl'>Active Rents</h2>
                    <div className="bg-white shadom-md rounded-xl">
                        <span>Title</span>
                        <p>Description</p>
                        <p><CalendarMonthIcon/>End date</p>
                        <LinearProgress variant="determinate" value={progress} />

                    </div>
                </div>

                 <div className='flex flex-col gap-4 p-8 bg-green-300 rounded-2xl shadow-md'>
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
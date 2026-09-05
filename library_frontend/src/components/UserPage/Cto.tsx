
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import useGetUser from "../../hooks/useGetUser";

function Cto() {
    const { userName } = useGetUser();

 //heandlers
 const date = new Date();

    return ( 
        <>
          
                <div className="grid grid-cols-[2fr_1fr]  shadow-md rounded-3xl overflow-hidden" >
                    {/* text-col */}
                    <div className="p-8 ">
                        <h1 className="text-3xl mb-2">Welcome <span className="text-green-300">{userName}</span></h1>
                        <p className="text-green-600">This is the palce where you can mange your books and<br></br> find new inspirations</p>
                    </div>
                    {/* Date */}
                    <div className="bg-green-100 p-8">
                        <div className="flex gap-2 justify-between">
                            {/* hour */}
                            <p className="text-lg"><AccessTimeFilledIcon/>{date.getHours()}:{date.getMinutes()}</p>
                            {/* month */}
                            <p className="text-lg"><CalendarMonthIcon/>{date.getMonth()}</p>
                        </div>
                    </div>
                </div>
        
        </>
     );
}

export default Cto;

import { useState, useEffect } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Cto() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch("http://localhost:5110/search/User")
                const data = await res.json();
                setUserName(data.userName);
                console.log(data)
            }
            catch(err)
            {
                console.log(err)
            }
        };
        fetchData();
    }, [])


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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect,useState } from 'react';


import Temporary_Img from '../../assets/images/temporaryImages/pragmatic-programmer-img.jpg'

type RentalHistory = {
    id: number;
    endDate: string | null;
    book: {
        tytul: string;
        autor: string;
    };
};

function ActiveRents() {

    const progress = 65;

    const [historyData, setHistoryData] = useState<RentalHistory[]>([]);

    //History data 
    useEffect(() => {
        const getHistory = async () => {
            const res = await fetch('http://localhost:5110/search/Books/rent', {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            });

            if (res.ok) {
                setHistoryData(await res.json());
            }
        };

        getHistory();
    }, [])


    return ( 
        <>
       
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {historyData.length === 0 ? <p>you don't have active rents yet  </p> :

                    historyData.map((item) => (
                        <div  key={item.id} className='flex flex-col gap-4  bg-white rounded-2xl shadow-md hover:shadow-md transition-shadow duration-300'>
                            <div>
                                <img src={Temporary_Img} alt='book-img' className=' max-h-[200px] w-full object-cover  rounded-t-lg'/> 
                            </div>
                            <div className='p-5'>
                                <div className="bg-white shadow-sm rounded-xl p-4">
                                    <span className="font-medium text-slate-600">{item.book.tytul}</span>
                                    <p className="text-sm text-slate-500 mt-1">{item.book.autor}</p>
                                    <p className="flex items-center gap-1 text-sm text-slate-500 mt-2"><CalendarMonthIcon fontSize="small"/>End date: {item.endDate ? new Date(item.endDate).toLocaleDateString() : '-'}</p>
                                    <LinearProgress sx={{height: 6, borderRadius: 3}} variant="determinate" value={progress} className="mt-3"/>

                                </div>
                                
                            </div>
                            
                        </div>



                    ))
                  
                }
                











             
            </div>
        
        </>
     );
}

export default ActiveRents;

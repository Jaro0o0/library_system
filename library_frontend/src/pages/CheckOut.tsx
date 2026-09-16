import { useDispatch,useSelector } from "react-redux";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Container from "../components/common/Container";
import { Button } from "@mui/material";
import { Link } from "react-router";
import { useState } from "react";

import  { removeItem} from '../store/ShoppingCardSlice/ShoppingCardSlice'
//Icons
import DeleteIcon from '@mui/icons-material/Delete';




import CheckoutAllert from "../components/Checkout/CheckoutAllert";

function CheckOut() {

    const dispatch = useDispatch();
    const cardItems = useSelector((state) => state.shoppingCard.card);

    const [openAllert,setOpenAllert] = useState(false);


    

    //handlers
    const rentDate = new Date();
    const rentDateFormatted = rentDate.toLocaleDateString('pl-PL');

    // End date
    const  getEndDate = rentDate.setMonth(rentDate.getMonth() + 1)
    const endDate = new Date(getEndDate).toLocaleDateString('pl-PL'); 

    return ( 
        <>  
        <Header/>
            <div className="w-full h-screen relative">
                <CheckoutAllert open={openAllert} onClose={() => setOpenAllert(false)}/>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] px-4">
               
                    {/* Grid */}
                    <div className="grid grid-cols-[2fr_1fr] gap-8 items-start">
                            {/* ShoppingCardCOL */}
                            <div className="p-4 overflow-y-auto flex flex-col gap-4 max-h-[500px]">
                                {cardItems.length === 0 ? <h2 className="text-slate-500 text-lg font-medium">Empty card</h2> : 
                                    cardItems.map((item,index) => {
                                        return (
                                            
                                            <div key={index} className="flex gap-4 shadow-md rounded-2xl overflow-hidden bg-white">
                                                    <div className="p-4">
                                                        <img src={`http://localhost:5110/images/Images?title=${encodeURIComponent(item.title)  }`} alt="book-img" className="h-[150px] w-[150px] object-cover rounded-2xl"/>
                                                    </div>
                                                    {/* Text_BOX */}
                                                    <div className="flex flex-col justify-between py-3 pr-4 flex-1 min-w-0">
                                                        <div>
                                                            <p className="text-slate-800 font-semibold text-base leading-snug">{item.title}</p>
                                                            <p className="text-slate-500 text-sm mt-1">{item.authors?.join(', ')}</p>
                                                        </div>
                                                        <button onClick={() => dispatch(removeItem())} className="text-red-400 hover:text-red-600 transition-colors duration-200 self-start mt-2 cursor-pointer"><DeleteIcon fontSize="small"/></button>
                                                       
                                                    </div>
                                                
                                            </div>
                                        )
                                    })}

                                
                            </div>
                            {/* Data_COL */}
                            <div className="shadow-xl rounded-2xl h-[300px]  p-8 bg-white w-full max-w-md border border-slate-100 flex flex-col justify-between">
                                
                                
                                {/* data_box */}
                                <div className="border-b border-slate-200 pb-5 mb-4 text-slate-800 font-semibold space-y-3">
                                    {/* Heading */}
                                    <h2 className="text-xl font-semibold text-slate-800 mb-5">Rental summary</h2>
                                    
                                    {cardItems.length === 0  ?  

                                    <p className="text-slate-500 font-normal">Your card is empty.</p>
                                    
                                   
                                    : <>
                                        {/* Start_Date */}
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-slate-500 font-normal">Start date</h2>
                                            <h2 className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm">{rentDateFormatted}</h2>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-slate-500 font-normal">End date</h2>
                                            <h2 className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm">{endDate}</h2>
                                        </div>
                                    </>
                                    }
                                </div>
                               
                                
                                {/* Buttons */}
                                <div className="flex gap-3 mt-5">
                                    <Button variant="contained" className="!bg-green-400  !text-white !font-semibold !px-5" onClick={() => setOpenAllert(prev => !prev)}>Rent</Button>
                                    <Button variant="outlined" className="!border-green-400 !text-green-400  !font-semibold" component={Link} to='/'>Home</Button>
                                </div>
                            
                            </div>
                    </div>
                
            </div>
                
                
            </div>
            <Footer/>
        </>
     );
}

export default CheckOut;

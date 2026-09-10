import { useDispatch,useSelector } from "react-redux";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Container from "../components/common/Container";
import { Button } from "@mui/material";
import { Link } from "react-router";
import { useState } from "react";

//Icons
import DeleteIcon from '@mui/icons-material/Delete';

import Book_Img from'../assets/images/temporaryImages/pragmatic-programmer-img.jpg'


import CheckoutAllert from "../components/Checkout/CheckoutAllert";

function CheckOut() {

    const dispatch = useDispatch();
    const cardItems = useSelector((state) => state.shoppingCard.card);

    const [openAllert,setOpenAllert] = useState(false);


    //handlers
    const rentDate = new Date();

    return ( 
        <>  
        <Header/>
            <div className="w-full h-screen relative">
                <CheckoutAllert open={openAllert} onClose={() => setOpenAllert(false)}/>

            <div className="absolute top-1/3 left-1/2 -translate-1/2">
               
                    {/* Grid */}
                    <div className="grid grid-cols-[2fr_1fr] gap-6">
                            {/* ShoppingCardCOL */}
                            <div className="p-4 overflow-y-auto flex flex-col gap-5">
                                {cardItems.length === 0 ? <h2>Empty card</h2> : 
                                    cardItems.map((item,index) => {
                                        return (
                                            
                                            <div key={index} className="flex gap-4 shadow-md">
                                                    <div>
                                                        <img src={Book_Img} alt="book-img" className="w-full object-cover max-h-[150px] rounded-xl"/>
                                                    </div>
                                                    {/* Text_BOX */}
                                                    <div className="flex flex-col justify-between p-2">
                                                        <div>
                                                            <p>{item.title}</p>
                                                            <p>{item.authors?.join(', ')}</p>
                                                        </div>
                                                        <DeleteIcon/>
                                                    </div>
                                                
                                            </div>
                                        )
                                    })}

                                
                            </div>
                            {/* Data_COL */}
                            <div className="shadow-xl p-4 h-fit p-8">
                                {/* data_box */}
                                <div className="border-b-1 mb-4">
                                    <div>
                                        <h2>Date</h2>
                                        <h2>{rentDate.getDate()}</h2>
                                    </div>
                                   
                                    <h2>end date</h2>
                                </div>
                                {/* price_box */}
                                <div>
                                    <span>for all</span>
                                    <h1>Price</h1>
                                    {/* Buttons */}
                                    <div className="flex gap-4 mt-4">
                                        <Button variant="contained" className="!bg-green-400" onClick={() => setOpenAllert(prev => !prev)}>Rent</Button>
                                        <Button variant="outlined"  component={Link} to='/'>Back to home</Button>
                                    </div>
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
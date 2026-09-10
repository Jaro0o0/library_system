import { useDispatch,useSelector } from "react-redux";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Container from "../components/common/Container";
import { Button } from "@mui/material";
import { Link } from "react-router";
import { useState } from "react";


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
                            <div className="p-4 overflow-y-auto">
                                {cardItems.length === 0 ? <h2>Empty card</h2> : 
                                    { cardItems.map((item,index) => {
                                        return (
                                            <div key={index}>
                                                <p>{item}</p> 
                                            </div>
                                        )
                                    })}

                                }
                            </div>
                            {/* Data_COL */}
                            <div className="shadow-xl p-4">
                                {/* data_box */}
                                <div className="border-b-1">
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
                                        <Button variant="outlined" className="!bg-green-400" component={Link} to='/'>Back to home</Button>
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
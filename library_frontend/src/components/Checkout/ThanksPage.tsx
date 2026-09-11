import { useEffect,useState } from "react";
import { Button } from "@mui/material";
import {Link} from "react-router";
import { useDispatch,useSelector } from "react-redux";
import { clearTable } from "../../store/ShoppingCardSlice/ShoppingCardSlice";

function ThanksPage () {

    const dispatch = useDispatch();
    const cardItems = useSelector((state) => state.shoppingCard.card)
    const [clearCard, setClearCard] = useState('');


    const clearHandler = () => {

        dispatch(clearTable());
    }


    return ( 
        <div className="w-full h-screen flex flex-col justify-center items-center">
            {/* Card */}
            <div className="shadow-md w-full  max-w-md h-full max-h-[500px] p-8 ">
                {/* TEXT_BOX */}
                <div className="mb-4">
                    <h1 className="text-3xl">Thans for Rent!</h1>
                </div>
                {/* YOUR_PSUHAREd */}
                 {/* Itmems */}
                <div className="mb-4">
                    {cardItems.map((item,index) => {
                        return (
                            // Item
                            <div key={index} className='flex p-4 shadow-md'>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.authors?.join(', ')}</p>
                                </div>
                            </div>
                        )
                    } )}
                </div>
                <Button    onClick={clearHandler} variant="contained" className="!bg-green-400" component={Link} to='/'>Back to Home</Button>
            
            </div>
        </div>
     );
}

export default ThanksPage  ;
import { Button } from '@mui/material';
import { useState } from 'react';

import { useSelector,  } from 'react-redux';
import type { RootState } from '../../store';

import { useNavigate } from 'react-router';





function CheckoutAllert({ open , onClose} ) {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    

      


     const cardItems = useSelector((state: RootState) => state.shoppingCard.card);

    //handleRentBook
    const handleRentBook = async () => {
        const token = localStorage.getItem("accessToken");

       

        const booksIds = cardItems.map((item: { title: string }) => item.title);

    try{
        const res = await fetch('http://localhost:5110/search/Books/rent', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(booksIds),
        });

        if(!res.ok){
            const message = await res.text();
            throw new Error(message);

        }
        else{
            
            onClose();
            navigate('/checkout/thanks');
            return;
        }
    }
    catch(error){
           if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred.");
            }
    }
        
       
    }

  

    return ( 
        <>
         {open && 
             <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-md shadow-md">
                    <h2 className="text-lg font-bold mb-4">Checkout Alert</h2>
                    <p className="mb-4">Please review your order before proceeding to checkout.</p>
                    <div className='flex gap-4'>
                        <Button variant='contained' className="!bg-green-400 !text-white !px-4 !py-2 " onClick={onClose}>Close</Button>
                        <Button  variant='contained' className="!bg-green-400 !text-white !px-4 !py-2  " onClick={handleRentBook} >Rent</Button>
                    </div>
                </div>
            </div>
        }       
        </>
     );
}

    
    


export default CheckoutAllert;

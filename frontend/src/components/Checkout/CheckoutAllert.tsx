import { Button } from '@mui/material';
import { useSelector,  } from 'react-redux';
import type { RootState } from '../../store';

import { useNavigate } from 'react-router';





function CheckoutAllert({ open , onClose}: {open: boolean, onClose: () => void;} ) {

    const navigate = useNavigate();
  
    

      


     const cardItems = useSelector((state: RootState) => state.shoppingCard.card);

    //handleRentBook
    const handleRentBook = async () => {
        const token = localStorage.getItem("accessToken");

       

        const booksIds = cardItems.map((item: { title: string }) => item.title);

    try{
        const res = await fetch('http://localhost:5000/search/Books/rent', {
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
                error.message;
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
                        <Button variant='contained' className="primary-button" onClick={onClose}>Close</Button>
                        <Button  variant='contained' className="primary-button" onClick={handleRentBook} >Rent</Button>
                    </div>
                </div>
            </div>
        }       
        </>
     );
}

    
    


export default CheckoutAllert;

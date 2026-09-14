import { Button } from '@mui/material';


import { useSelector,  } from 'react-redux';
import type { RootState } from '../../store';

import { useNavigate } from 'react-router';



type CheckoutAllertProps = {
    open: boolean;
    onClose: () => void;
};

function CheckoutAllert({ open , onClose}: CheckoutAllertProps ) {

    const navigate = useNavigate();
    

      


    //Handlers
    // const handlSubmit = async () => {

    //     const res = await fetch(`http://localhost:5110/search/Books/rent?title=${cardItems}`,{
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //     })

    //     const data = await res.json();
    //     console.log(data);
    // }


     const cardItems = useSelector((state: RootState) => state.shoppingCard.card);

    //handleRentBook
    const handleRentBook = async () => {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            console.error("No access token found");
            return;
        }

        const booksIds = cardItems.map((item: { title: string }) => item.title);

        const res = await fetch('http://localhost:5110/search/Books/rent', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(booksIds),
        });

        if (res.ok) {
            onClose();
            navigate('/checkout/thanks');
            return;
        }

        const data = await res.text();
        console.log(data);
    }

  

    return ( 
        <>
         {open && 
             <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-md shadow-md">
                    <h2 className="text-lg font-bold mb-4">Checkout Alert</h2>
                    <p className="mb-4">Please review your order before proceeding to checkout.</p>
                    <div className='flex gap-4'>
                        <Button variant='contained' className="bg-green-400 text-white px-4 py-2 rounded " onClick={onClose}>Close</Button>
                        <Button  variant='contained' className="bg-green-400 text-white px-4 py-2 rounded " onClick={handleRentBook} >Rent</Button>
                    </div>
                </div>
            </div>
        }       
        </>
     );
}

    
    


export default CheckoutAllert;

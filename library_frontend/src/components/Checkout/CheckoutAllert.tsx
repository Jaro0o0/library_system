import { useState } from 'react';
import { useSelector,  } from 'react-redux';

import { useNavigate } from 'react-router';



function CheckoutAllert({ open , onClose} ) {

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


     const cardItems = useSelector((state) => state.shoppingCard.card);

    //handleRentBook
    const handleRentBook = async () => {
        const booksIds = cardItems.map((item) => item.title);

        const res = await fetch('http://localhost:5110/search/Books/rent', {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(booksIds),
        });

        if(res.ok){
            

            navigate('thanks')
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
                        <button className="bg-green-400 text-white px-4 py-2 rounded " onClick={onClose}>Close</button>
                        <button className="bg-green-400 text-white px-4 py-2 rounded " onClick={handleRentBook} >Rent</button>
                    </div>
                </div>
            </div>
        }       
        </>
     );
}

    
    


export default CheckoutAllert;
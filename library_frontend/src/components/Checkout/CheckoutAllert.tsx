import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function CheckoutAllert({ open , onClose} ) {

    


      


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
    const handleRentBook =  async () => {

        const res = await fetch('http://localhost:5110/search/Books/rent',{

            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cardItems),

        });

        const data = await res.json();
        console.log(data);
        
    }

  

    return ( 
        <>
         {open && 
             <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-md shadow-md">
                    <h2 className="text-lg font-bold mb-4">Checkout Alert</h2>
                    <p className="mb-4">Please review your order before proceeding to checkout.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onClose}>Close</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleRentBook} >Rent</button>
                </div>
            </div>
        }       
        </>
     );
}

    
    


export default CheckoutAllert;
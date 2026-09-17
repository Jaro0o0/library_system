import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/ShoppingCardSlice/ShoppingCardSlice';
import { Button } from '@mui/material';
import { Link } from 'react-router';
import { useEffect } from 'react';
//Icons
import DeleteIcon from '@mui/icons-material/Delete';



function ShoppingCard({ open, onClose }) {

    const cardItems = useSelector((state) => state.shoppingCard.card);
    const dispatch = useDispatch();


    const handleRemoveItem = (name) => {
        dispatch(removeItem(name));
    }


    // Scroll block
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);



    return ( 
        <>
            {/* SHoppongCardOveraly */}
            <div className={`fixed inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40  z-[150] transition-opacity duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={onClose}></div>

            {/* Shopping_Card */}
            <div className={`w-[500px] rounded-l-md h-screen flex flex-col items-center justify-between fixed  top-0   right-0 p-8 bg-white z-[200] overflow-y-auto transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
                {/* Text_box */}
                <div className="mb-4">
                    <h2 className='font-semibold text-slate-800 text-2xl'>Your Shopping Card</h2>
                </div>
                {/* Itmems */}
                <div>
                    {cardItems.map((item,index) => {
                        return (
                            // Item
                            <div key={index} className='flex gap-2 p-4 shadow-md'>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.authors?.join(', ')}</p>
                                    <button onClick={() => dispatch(removeItem())} className="text-red-400 hover:text-red-600 transition-colors duration-200 self-start mt-2 cursor-pointer"><DeleteIcon fontSize="small"/></button>
                                </div>
                                <div>
                                    <img src={`http://localhost:5110/images/Images?title=${encodeURIComponent(item.title)  }`} alt="book-img" className="rounded-2xl object-cover w-[100px] h-[100px]" />
                                </div>
                            </div>
                            
                        )
                    } )}
                </div>
                {/* Buttons */}
                <div className='mb-12'>
                    <Button variant='contained' component={Link} to='/checkout' className="primary-button">Checkout</Button>
                </div>
            </div>
        </>
     );
}

export default ShoppingCard;

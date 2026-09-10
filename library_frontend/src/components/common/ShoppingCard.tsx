import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/ShoppingCardSlice/ShoppingCardSlice';
import { Button } from '@mui/material';
import { Link } from 'react-router';

function ShoppingCard({ open, onClose }) {

    const cardItems = useSelector((state) => state.shoppingCard.card);
    const dispatch = useDispatch();


    const handleRemoveItem = (name) => {
        dispatch(removeItem(name));
    }

    return ( 
        <>
            {/* SHoppongCardOveraly */}
            <div className={`fixed inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40  z-[150] transition-opacity duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={onClose}></div>

            {/* Shopping_Card */}
            <div className={`w-[500px] rounded-md h-screen flex flex-col items-center justify-between fixed  top-0   right-0 p-8 bg-white z-[200] overflow-y-auto transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
                {/* Text_box */}
                <div className="mb-4">
                    <h2>Your Shopping Card</h2>
                </div>
                {/* Itmems */}
                <div>
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
                {/* Buttons */}
                <div className='mb-12'>
                    <Button variant='contained' component={Link} to='checkout' className='!bg-green-400'>Go to summary</Button>
                </div>
            </div>
        </>
     );
}

export default ShoppingCard;
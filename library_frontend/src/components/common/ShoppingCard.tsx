import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/ShoppingCardSlice/ShoppingCardSlice';


function ShoppingCard() {

    const cardItems = useSelector((state) => state.shoppingCard.card);
    const dispatch = useDispatch;


    const handleRemoveItem = (name) => {
        dispatch(removeItem(name));
    }

    return ( 
        <div className="w-[300px] h-screen flex items-center justify-center fixed top-[70px] z-20  right-0'">
            <div className="mb-2">
                <h2>Your Shopping Card</h2>
            </div>
            {/* Itmems */}
            <div>
                {cardItems.map((item,index) => {
                    return (
                        <div key={index}>
                            {item}
                        </div>
                    )
                } )}
            </div>
        </div>
     );
}

export default ShoppingCard;
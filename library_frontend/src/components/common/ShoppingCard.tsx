import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/ShoppingCardSlice/ShoppingCardSlice';


function ShoppingCard() {

    const cardItems = useSelector((state) => state.shoppingCard.card);
    const dispatch = useDispatch;


    const handleRemoveItem = (name) => {
        dispatch(removeItem(name));
    }

    return ( 
        <div className="w-[500px] rounded-md h-screen flex  justify-center fixed  top-0 top-[60px]  right-0 p-8 bg-white z-60">
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
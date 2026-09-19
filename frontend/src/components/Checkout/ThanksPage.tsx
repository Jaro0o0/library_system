import { Button } from "@mui/material";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/commonAnimations";

import { clearTable } from "../../store/ShoppingCardSlice/ShoppingCardSlice";


function ThanksPage() {
  const dispatch = useDispatch();
  const cardItems = useSelector((state: any) => state?.shoppingCard?.card ?? []);

  const clearHandler = () => {
    dispatch(clearTable());
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <motion.div
        className="shadow-md w-full max-w-lg h-full max-h-[600px] p-8 overflow-y-auto flex flex-col justify-between"
        variants={fadeInUp }
        initial="hidden"
        animate="visible"
      >
        <div className="mb-4">
          <h1 className="text-3xl font-medium text-gray-900">Thanks for Rent!</h1>
        </div>

        <div className="mb-4 space-y-4">
          {cardItems.length === 0 ? (
            <p className="text-gray-500">Your rental list is empty.</p>
          ) : (
            cardItems.map((item: any, index: number) => (
              <div key={`${item.title ?? "book"}-${index}`} className="flex p-4 shadow-md gap-6">
                <div>
                  <img
                    src={`http://localhost:5000/images/Images?title=${encodeURIComponent(item.title ?? "")}`}
                    alt="book-img"
                    className="h-[150px] w-[150px] object-cover rounded-2xl"
                  />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.authors?.join(", ") ?? "Unknown author"}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <Button
          onClick={clearHandler}
          variant="contained"
          className="primary-button"
          component={Link}
          to="/"
        >
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
}

export default ThanksPage;
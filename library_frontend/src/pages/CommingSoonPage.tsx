import { Button } from "@mui/material";
import {Link} from "react-router";
import {motion} from 'framer-motion';
import { fadeInUp } from "../animations/commonAnimations";

function CommingSoonPage() {
    return ( 
        <motion.div className="w-full h-screen relative"
            variants={fadeInUp }
            initial='hidden'
            animate="visible"
        
        >
            <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-white shadow-md  rounded-2xl  w-full max-w-lg p-12 h-full max-h-[500px] flex flex-col justify-between ">
                <h1 className="text-3xl font-bold text-gray-900 "> This page is not avilable yet<br/><span className="text-green-400">Comming soon</span></h1>
                <Button variant="contained" className="primary-button" component={Link} to='/'>Home</Button>
            </div>

        </motion.div>
     );
}

export default CommingSoonPage;
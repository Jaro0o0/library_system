import { Button } from "@mui/material";
import {Link} from "react-router";

function CommingSoonPage() {
    return ( 
        <div className="w-full h-screen relative">
            <div className="absolute top-1/3 left-1/2 -translate-1/2 bg-white shadow-md  rounded-2xl  w-full max-w-lg p-12 h-full max-h-[500px] flex flex-col justify-between ">
                <h1 className="text-3xl font-bold text-gray-900 "> This page is not avilable yet<br/><span className="text-green-400">Comming soon</span></h1>
                <Button variant="contained" className="!bg-green-400" component={Link} to='/'>Home</Button>
            </div>

        </div>
     );
}

export default CommingSoonPage;
import { Link } from "react-router";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

function AccountHeader() {
    return ( 
        <header className={`fixed  top-0 left-0 right-0 z-[100] flex justify-between items-center py-2 px-6    text-gray-900 font-medium`} >
            <div>
                <h1 className={`text-xl   font-bold`} >
                    <Link to="/"> Book <span className="text-green-400">Tracker</span></Link>
                </h1>
            </div>
            <div>
                <Link to='/faq' className="hover:text-green-500 transition-colors"><HelpCenterIcon/></Link>
            </div>
        </header>
     );
}

export default AccountHeader;
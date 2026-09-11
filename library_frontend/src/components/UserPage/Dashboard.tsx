import UserPageDashboardCol from "./UserPageDashboardCol";
import UserPageOptionsCol from "../UserPage/UserOptionsCol"
import UserPageHeader from "./UserPageHeader";


function Dashboard(){
    return( 
    <div className="h-screen overflow-hidden">
       
      
        {/* Grid */}
        <div className="grid h-full grid-cols-[1fr_3fr]">
            
            
            <UserPageOptionsCol/>
            <UserPageDashboardCol/>
            
        </div>

    </div>
    )
}

export default Dashboard;

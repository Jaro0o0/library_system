import UserPageHeader from "./UserPageHeader";
import UserPageDashboardCol from "./UserPageDashboardCol";
import UserPageOptionsCol from "../UserPage/UserOptionsCol"


function Dashboard(){
    <>
        <UserPageHeader/>
        {/* Grid */}
        <div className="grid grid-cols-[1fr_3fr] h-full">
            <UserPageOptionsCol/>
            <UserPageDashboardCol/>
            
        </div>

    </>
}

export default Dashboard;
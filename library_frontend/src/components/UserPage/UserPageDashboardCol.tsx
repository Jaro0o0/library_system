import ActiveRents from "./ActiveRents";
import UserPageRecomended from "./UserPageRecomended";



function UserPageDashboardCol() {
    return ( 
           
                    <div className="flex flex-col gap-10 justify-start p-10 overflow-y-auto bg-slate-50/50">
                       
                        <h1 className="text-3xl font-semibold text-slate-800">Daschboard</h1>
                        <ActiveRents/>
                        <UserPageRecomended/>
                    </div>
     );
}

export default UserPageDashboardCol;
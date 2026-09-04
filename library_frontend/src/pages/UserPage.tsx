import UserPageHeader from "../components/UserPage/UserPageHeader";
import Container from "../components/common/Container";
import Cto from "../components/UserPage/Cto";
import ActiveRents from "../components/UserPage/ActiveRents";
import UserPageRecomended from "../components/UserPage/UserPageRecomended";
import Section from "../components/common/Section";

function UserPage() {
    return (  
        <div className="flex flex-col h-screen max-h-screen overflow-hidden">
           <UserPageHeader/>
            <div className="flex-1 min-h-0 w-full">
                {/* Grid */}
                <div className="grid grid-cols-[1fr_4fr] h-full">
                    {/* Options */}
                    <div></div>
                    {/* Dashboard */}
                    <div className="flex flex-col gap-15 justify-center p-12 overflow-hidden">
                        <Cto/>
                        <ActiveRents/>
                        <UserPageRecomended/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
import Header from "../components/common/Header";
import Container from "../components/common/Container";
import Cto from "../components/UserPage/Cto";
import ActiveRents from "../components/UserPage/ActiveRents";
import UserPageRecomended from "../components/UserPage/UserPageRecomended";
import Section from "../components/common/Section";

function UserPage() {
    return (  
        <>
            <Header/>
            <div className="w-full h-screen max-h-screen ">
                {/* Grid */}
                <div className="grid grid-cols-[1fr_4fr]">
                    {/* Options */}
                    <div></div>
                    {/* Dashboard */}
                    <div className="flex flex-col justify-center  p-12">
                        <Cto/>
                        <Section>
                            <ActiveRents/>
                        </Section>
                        <Section>
                            <UserPageRecomended/>
                        </Section>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default UserPage;
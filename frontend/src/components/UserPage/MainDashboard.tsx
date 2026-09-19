import { Outlet } from 'react-router';

import UserOptionsCol from './UserOptionsCol';

function MainDashboard() {

    return (
        <div className="h-screen overflow-hidden">

            {/* Grid */}
            <div className="grid grid-cols-1 md:h-full md:grid-cols-[1fr_3fr]">

                <UserOptionsCol />

                {/* Dashboard / History / Favourites */}
                <Outlet />

            </div>

        </div>
    );
}

export default MainDashboard;
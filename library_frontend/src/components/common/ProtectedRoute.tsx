import usegetUserStatus from '../../hooks/useGetUserStatus';
import {Navigate} from 'react-router';


function ProtectedRoute({ children }: { children: React.ReactNode }) {
        const { isUserLogin } = usegetUserStatus();
    
    if(!isUserLogin) {
        return <Navigate to="/login" />;
    }else{
        return children;
    }
}

export default ProtectedRoute;
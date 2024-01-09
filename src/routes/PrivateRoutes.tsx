import { Outlet, Navigate, useLocation } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { useAuth } from '../hooks/useAuth';

const PrivateRoutes = () => {
    const { user } = useAuth();
    const location = useLocation();
    return(
        user ?  <MainLayout> <Outlet/> </MainLayout>  : <Navigate  to="/login" replace state={{from: location}} />
    )
}

export default PrivateRoutes
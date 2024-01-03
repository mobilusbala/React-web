import { Outlet, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { useAuth } from '../hooks/useAuth';

const PrivateRoutes = () => {
    const { user } = useAuth();
    return(
        user ?  <MainLayout> <Outlet/> </MainLayout>  : <Navigate to="/login"/>
    )
}

export default PrivateRoutes
import { Outlet, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const PrivateRoutes = () => {
    let auth = {'token':true}
    return(
        auth.token ?  <MainLayout> <Outlet/> </MainLayout>  : <Navigate to="/login"/>
    )
}

export default PrivateRoutes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import { User, useUser } from './hooks/useUser';
import MainRoutes from './routes/MainRoutes';
import { Box } from '@mui/material';
import SideBar from './components/SideBar/SideBar';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';


const App = () => {
  const { user, login, logout } = useAuth();

  const setUser = (user: User | null) => {
    if (user) login(user)
  }

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


  return (
    <BrowserRouter>
      <AuthProvider>
      <MainRoutes />      
        {/* <Box sx={{ display: 'flex'} }>
          <SideBar isOpen={open} handleDrawerClose={handleDrawerClose} />
          <Navbar handleDrawerOpen={handleDrawerOpen} isOpen={open} />
           <div style={{marginTop : '70px'}}>
              <MainRoutes />
           </div>
        </Box> */}
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
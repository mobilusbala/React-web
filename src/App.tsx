import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { User, useUser } from './hooks/useUser';
import MainRoutes from './route/MainRoutes';
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
      <AuthContext.Provider value={{ user, setUser }}>
        <Box sx={{ display: 'flex'} }>
          <SideBar isOpen={open} handleDrawerClose={handleDrawerClose} />
          <Navbar handleDrawerOpen={handleDrawerOpen} isOpen={open} />
           <div style={{paddingTop : '50px'}}>
              <MainRoutes />
           </div>
        </Box>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
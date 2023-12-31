import React, { PropsWithChildren, ReactChildren, ReactElement, ReactNode, useState } from 'react'
import { Box } from '@mui/material';
import SideBar from '../components/SideBar/SideBar';
import Navbar from '../components/Navbar/Navbar';

interface Props extends PropsWithChildren  {
    children:  React.ReactNode  ;
}

const MainLayout  : React.FC<Props> = ({ children }: Props) => {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar isOpen={open} handleDrawerClose={handleDrawerClose} />
            <Navbar handleDrawerOpen={handleDrawerOpen} isOpen={open} />
            <div style={{ marginTop: '50px' }}>
                {children}
            </div> 
        </Box>
    )
}

export default MainLayout;
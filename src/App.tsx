import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { User, useUser } from './hooks/useUser';
import { Home } from './pages/Home';
import Login from './pages/Login';
import { Logout } from './pages/Logout';
import MainRoutes from './route/MainRoutes';
import { Navbar } from './components/Navbar/Navbar';

const App = () => {
  const { user, login, logout } = useAuth();

  const setUser = (user : User | null) => {
   if(user) login(user)
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, setUser }}>
         <Navbar/>
         <MainRoutes/>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; // Assuming you have a CSS file for styling
import Login from './Pages/Login/Login.tsx';
import PublicPage from './Pages/public.tsx';
import AdminPage from './protectedPages/AdminPage.tsx';
import { useState } from 'react';
import { useEffect } from 'react';
import Navigation from './Pages/GlobalComponents/Navigation/Navigation.tsx';
import type {UserTypo } from './utils/types.ts';
import ProtectedRoute from './utils/ProtectedRoute.tsx';

const App = () => {
  const [user, setUser] = useState<UserTypo>(null);

  useEffect(() => {
    console.log('App component mounted', user);
    
  }, [user]);
  return (
    <>
      <Navigation IsUserLogged={!!user} setUser={setUser}/>

      <Routes>
        <Route index element={<Login setUser={setUser}/>} />
        <Route path="/login" element={<Navigate to={"/"}/>} />
        <Route path="PublicPage" element={<PublicPage />} />
        <Route 
          path="AdminPage" 
          element={
            <ProtectedRoute user={user} admitedRoles={['admin']}>
              <AdminPage user={user}/>
            </ProtectedRoute>
          }/>
        
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
};





export default App;
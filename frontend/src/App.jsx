import React, { useEffect } from 'react'
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import {useAuthStore} from './store/useAuthStore'
import {Loader} from 'lucide-react'
import { Toaster } from 'react-hot-toast';
import {useThemeStore} from './store/useThemeStore'




import About from './pages/About.jsx'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import HostLayout from './pages/Host/HostLayout'
import HostVans from './pages/Host/HostVans.jsx'
import HostVanDetail from './pages/Host/HostVanDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import Dashboard from './pages/Host/Dashboard.jsx'
import Income from './pages/Host/Income.jsx'
import Reviews from './pages/Host/Reviews.jsx'
import HostVanInfo from './pages/Host/HostVanInfo.jsx'
import HostVanPricing from './pages/Host/HostVanPricing.jsx'
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx'




export default function App() {
 


  const { authUser, checkAuth,isCheckingAuth} = useAuthStore();
  const {theme}=useThemeStore()



  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


 if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div data-theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={authUser ? <About /> : <Navigate to="/login" />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
          
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/vans" element={!authUser ? <SignUpPage /> :<Vans/>} />
          <Route path="/vans/:id" element={!authUser ? <SignUpPage /> :<VanDetail/>} />






            <Route path="/host" element={!authUser ? <SignUpPage /> :<HostLayout/>}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>







          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
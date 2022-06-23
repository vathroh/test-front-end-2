import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './pages/products/AllProducts'
import Home from './pages/Home'
import Register from './pages/auth/Register'
import ResetPassword from './pages/auth/ResetPassword'
import Login from './pages/auth/Login'
import ProtectedRoutes from './ProtectedRoute'
import AddProducts from './pages/products/AddProducts'


export interface AuthProps {
    data: any;
    isLogin: boolean;
}

const Router: React.FC<AuthProps> = (data, isLogin) => {
    // console.log(isLogin)
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route path='/' element={<Home data={data.data} isLogin={data.isLogin} />}>
                            <Route index element={<AllProducts />} />
                            <Route path='all-products' element={<AllProducts />} />
                            <Route path='add-product' element={<AddProducts />} />
                        </Route>
                    </Route>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='reset-password' element={<ResetPassword />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
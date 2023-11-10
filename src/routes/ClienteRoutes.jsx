import { Navigate, Route, Routes } from "react-router-dom"
import React from 'react';
import { Register } from "../components/layout/clientes/Register"

import { List } from "../components/layout/clientes/List"

export const ClienteRoutes = () => {
    return (
        <>

                <Routes>
                    
                    <Route path="clientes/page" element={<List />} />
                   
                    <Route path="clientes/register" element={<Register />} />
                        <Route path="cliente/edit/:id" element={<Register />} />

                    <Route path="/" element={<Navigate to="users/page"/>} />
                    <Route path="/clientes" element={<Navigate to="page"/>} />

                </Routes>
        </>
    )
}

// <Route path="users/page/:page" element={<UsersPage />} />

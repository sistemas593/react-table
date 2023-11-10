import { Navigate, Route, Routes } from "react-router-dom"

import { Register } from "../components/layout/users/Register"

import { List } from "../components/layout/users/List"

export const UserRoutes = () => {
    return (
        <>

                <Routes>
                    <Route path="users/page" element={<List />} />               
                         
                    <Route path="/" element={<Navigate to="users/page"/>} />
                </Routes>
        </>
    )
}

/*

                        <Route path="users/register" element={<Register />} />
                        <Route path="users/edit/:id" element={<Register />} />

                    
                    <Route path="/users" element={<Navigate to="page"/>} />

*/
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserRoutes } from './routes/UserRoutes';
import { ClienteRoutes } from './routes/ClienteRoutes';

export const AppRoutes = () => {
    return (
        <Routes>
            {
                <>
                    
                    <Route path='/*' element={<UserRoutes />} />
                </>        
            }
        </Routes>
    );
}

//<Route path='/*' element={<UserRoutes />} />
//<Route path='/*' element={<ClienteRoutes />} />

/*
const { isLoginLoading } = false;
    if (isLoginLoading) {
        return (
            <div className="container my-4 text-center">
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

*/
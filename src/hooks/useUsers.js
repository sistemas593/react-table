import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { findAllPages, remove, save, update } from "../services/userService";
import { initialForm, reducerAdd, reducerRemove, reducerUpdate, loading, onSelectedForm, onOpenForm, onCloseForm, loadingError } 
from "../store/slices/usersSlice";

export const useUsers = () => {
    
    const { users, selected, visibleForm, errors, isLoading, paginator } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const getPage = async (page = 0) => {
        try {            
            const result = await findAllPages(page);
            dispatch(loading(result.data));
        } catch (error) {
            if (error.response?.status == 401) {
                handlerLogout();
            }
        }
    }

    const handlerAdd = async (user) => {
        // console.log(user);

        let response;
        try {

            if (user.id === 0) {
                response = await save(user);
                dispatch(add(response.data))
            } else {
                response = await update(user);
                dispatch(reducerUpdate(response.data));
            }

            Swal.fire(
                (user.id === 0) ?
                    'Registro Creado' :
                    'Registro Actualizado',
                (user.id === 0) ?
                    'El registro ha sido creado con exito!' :
                    'El registro ha sido actualizado con exito!',
                'success'
            );
            handlerCloseForm();
            navigate('/users/page');
        } catch (error) {
            if (error.response && error.response.status == 400) {
                dispatch(loadingError(error.response.data));
            } else if (error.response && error.response.status == 500 &&
                error.response.data?.message?.includes('constraint')) {
            
                if (error.response.data?.message?.includes('UK_username')) {
                    dispatch(loadingError({ username: 'El registro ya existe!' }));
                }
                if (error.response.data?.message?.includes('UK_email')) {
                    dispatch(loadingError({ email: 'El email ya existe!' }));
                }
            } else if (error.response?.status == 401) {
                handlerLogout();
            } else {
                throw error;
            }
        }
    }

    const handlerRemove = (id) => {
         console.log('eliminar registro',id);

        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el registro será eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then( async(result) => {
            if (result.isConfirmed) {

                try {
                    await remove(id);

                    dispatch(reducerRemove(id));

                    Swal.fire(
                        'Registro Eliminado!',
                        'El registro ha sido eliminado con exito!',
                        'success'
                    );
                    navigate('/users/page');
                } catch (error) {
                    if (error.response?.status == 401) {
                        handlerLogout();
                    }
                }
            }
        })
        

    }

    const handlerSelectedForm = (user) => {
        dispatch(onSelectedForm({ ...user }));
    }

    const handlerOpenForm = () => {
        dispatch(onOpenForm());
    }

    const handlerCloseForm = () => {
        dispatch(onCloseForm());
        dispatch(loadingError({}));
    }
    return {
        users,
        selected,
        initialForm,
        visibleForm,
        errors,
        isLoading,
        paginator,
        handlerAdd,
        handlerRemove,
        handlerSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getPage,
    }
}
import { createSlice } from "@reduxjs/toolkit";

export const initialForm = {
    idCliente: '',
    cliente: '',
    numeroIdentificacion: '',
}
const initialErrors = {
    cliente: '',
    numeroIdentificacion: '',
}
export const clientesSlice = createSlice({

    name: 'clientes',
    initialState: {
        clientes: [],
        paginator: {},
        selected: initialForm,
        visibleForm: false,
        errors: initialErrors,
        isLoading: true,
    },
    reducers: {
        reducerAdd: (state, action) => {
            state.clientes = [
                ...state.clientes,
                {
                    ...action.payload,
                }
            ];
            state.selected = initialForm;
            state.visibleForm = false;
        },
        reducerRemove: (state, action) => {
            state.clientes = state.clientes.filter(cliente => cliente.id !== action.payload);
        },
        reducerUpdate: (state, action) => {
            state.clientes = state.clientes.map(u => {
                if (u.id === action.payload.id) {
                    return {
                        ...action.payload,
                    };
                }
                return u;
            });
            state.selected = initialForm;
            state.visibleForm = false;
        },
        loading: (state, { payload }) => {
            state.clientes = payload.content;
            state.paginator = payload;
            state.isLoading = false;
        },
        onSelectedForm: (state, { payload }) => {
            state.selected = payload;
            state.visibleForm = true;
        },
        onOpenForm: (state) => {
            state.visibleForm = true;
        },
        onCloseForm: (state) => {
            state.visibleForm = false;
            state.selected = initialForm;

        },
        loadingError: (state, {payload}) => {
            state.errors = payload;
        }
    }
});

export const {
    reducerAdd,
    reducerRemove,
    reducerUpdate,
    loading,
    onSelectedForm,
    onOpenForm,
    onCloseForm,
    loadingError,
} = clientesSlice.actions;
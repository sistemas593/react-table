import { createSlice } from "@reduxjs/toolkit";

export const initialForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
    admin: false,
}
const initialErrors = {
    username: '',
    password: '',
    email: '',
}
export const usersSlice = createSlice({

    name: 'users',
    initialState: {
        users: [],
        paginator: {},
        selected: initialForm,
        visibleForm: false,
        errors: initialErrors,
        isLoading: true,
    },
    reducers: {
        reducerAdd: (state, action) => {
            state.users = [
                ...state.users,
                {
                    ...action.payload,
                }
            ];
            state.selected = initialForm;
            state.visibleForm = false;
        },
        reducerRemove: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        reducerUpdate: (state, action) => {
            state.users = state.users.map(u => {
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
            state.users = payload.content;
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
} = usersSlice.actions;
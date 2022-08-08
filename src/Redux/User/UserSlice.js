import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getRequest, postRequest, routes } from 'api'

export const login = createAsyncThunk(
    "user/login",
    async ({ username, password }, thunkAPI) => {
        if (!username || !password) {
            return thunkAPI.rejectWithValue('Form fields are empty')
        }
        try {
            const data = new FormData()
            data.append('username', username)
            data.append('password', password)
            const response = await postRequest(routes.login, data)

            localStorage.setItem("access_token", response.data.access_token)
            return { username }

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.detail)
        }
    }
)

export const getAuthenticatedUser = createAsyncThunk(
    "user/getAuthenticatedUser",
    async (_, thunkAPI) => {
        try {
            const response = await getRequest(routes.authCheck)
            const { username } = response.data

            return { username }

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.detail)
        }
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: '',
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        logout: state => {
            state.username = '';
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = "";
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.username = action.payload.username;
            state.isSuccess = true;
            state.isError = false;
            state.errorMessage = '';
        },
        [login.rejected]: (state, action) => {
            state.username = null;
            state.isSuccess = false;
            state.isError = true;
            state.errorMessage = action.payload;
        },
        [getAuthenticatedUser.fulfilled]: (state, action) => {
            state.username = action.payload.username;
            state.isSuccess = true;
            state.isError = false;
            state.errorMessage = '';
        },
        [getAuthenticatedUser.rejected]: (state, action) => {
            state.username = null;
            state.isSuccess = false;
            state.isError = true;
            state.errorMessage = action.payload;
        }
    }
})

export const userSelector = state => state.user

export const { logout } = userSlice.actions

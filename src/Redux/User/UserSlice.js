import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { postRequest } from 'helper'

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
            const response = await postRequest('auth/login', data)

            localStorage.setItem("token", response.data.access_token)
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
        }
    }
})

export const userSelector = state => state.user

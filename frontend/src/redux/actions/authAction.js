import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const auth = createAsyncThunk('userLogin', async ({email, password}, {rejectWithValue}) => {
    try {
        const response = await axios.post('http://localhost:5000/api/users/login', {email, password})
        return response.data
    }catch(err){
        if (!err.response){
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
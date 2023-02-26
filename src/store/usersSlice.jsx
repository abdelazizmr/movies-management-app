import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const API_URL = 'http://localhost:5000/users'

const initalState = {
    users : [],
    error : null,
    loading : null
}

export const fetchUsers = createAsyncThunk(
    'fetch/users', async()=>{
        const {data} = await axios.get(API_URL)
        return data
    }
)
export const addUser = createAsyncThunk(
    'add/user', async(newuser)=>{
        const {data} = await axios.post(API_URL,newuser)
        return data
    }
)

export const editUser = createAsyncThunk(
    'edit/user', async(payload)=>{
        const {id , updatedUser} = payload
        console.log('id',id,'update',updatedUser)
        const {data} = await axios.put(`${API_URL}/${id}`,updatedUser)
        return data
    }
)

export const deleteUser = createAsyncThunk(
    'delete/user', async(id)=>{
        console.log(id)
        const {data} = await axios.delete(`${API_URL}/${id}`)
        return data
    }
)


const usersSlice = createSlice({
    name : 'users',
    initialState : initalState,
    reducers : {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending,(state,action)=>{
            state.loading = 'pending'
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.users = action.payload
            state.loading = 'success'
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = 'failed'
            state.error = 'Can not download users data🤕'
        })
        // adding new user case
        // .addCase(addUser.fulfilled,(state,action)=>{
        //     console.log(action.payload)
        //     state.users.push(action.payload)
        // })
        // //edit user
        // .addCase(editUser.fulfilled,(state,action)=>{
        //     console.log(action)
        //     // const {id , updateduser } = action.meta.agrs
        //     // console.log(id,'and',updateduser)
        //     // state.users.forEach(user=>{
        //     //     user.id === id ? user = updateduser : user
        //     // })
        //     // state.users.push(action.payload)
        // })
        .addCase(deleteUser.fulfilled,(state,action)=>{
            console.log(action.meta.arg)
            const id = state.users.findIndex(user=>user.id === action.meta.arg)
            state.users.splice(id,1)
            return
        })
        
    },
})


export const allUsers = state => state.users.users
export const allUsersError = state => state.users.error
export const allUsersLoading = state => state.users.loading

export default usersSlice.reducer
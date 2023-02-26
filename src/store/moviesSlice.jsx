import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const API_URL = 'http://localhost:5000/movies'

const initalState = {
    movies : [],
    error : null,
    loading : null
}

export const fetchMovies = createAsyncThunk(
    'fetch/movies', async()=>{
        const {data} = await axios.get(API_URL)
        return data
    }
)
 

export const addMovie = createAsyncThunk(
    'add/movie', async(newmovie)=>{
        console.log(newmovie)
        const {data} = await axios.post(API_URL,newmovie)
        return data
    }
)

export const deleteMovie = createAsyncThunk(
    'delete/movie', async(id)=>{
        console.log(id)
        const {data} = await axios.delete(`${API_URL}/${id}`)
        return data
    }
)


export const updateMovie = createAsyncThunk(
    'update/movie', async(payload)=>{
        const {id , updateMovie} = payload
        console.log('id',id,'update',updateMovie)
        const {data} = await axios.put(`${API_URL}/${id}`,updateMovie)
        return data
    }
)

//  to search about a movie using json-server
export const searchBy = createAsyncThunk(
    'update/movie', async(params)=>{
        console.log(params)
        const {data} = await axios.get(`${API_URL}?`,{params})
        console.log(data)
        return data
    }
)






const moviesSlice = createSlice({
    name : 'movies',
    initialState : initalState,
    reducers : {
        filter(state,action){
            if (action.payload.type === 'rating-asc'){
                console.log(action.payload.type)
                state.movies.sort((a,b)=>a.Rating - b.Rating)
                return
            }
                
            if (action.payload.type === 'rating-des'){
                console.log(action.payload.type)
                state.movies.sort((a,b)=>b.Rating - a.Rating)
                return
            }


            if (action.payload.type === 'title-asc'){
                console.log(action.payload.type)
                state.movies.sort((a, b) => a.Title.localeCompare(b.Title));
                return
            }
                
            if (action.payload.type === 'title-des'){
                console.log(action.payload.type)
                state.movies.sort((a, b) => b.Title.localeCompare(a.Title));
                return
            }         
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMovies.pending,(state,action)=>{
            state.loading = 'pending'
        })
        .addCase(fetchMovies.fulfilled,(state,action)=>{
            state.movies = action.payload
            state.loading = 'success'
        })
        .addCase(fetchMovies.rejected,(state,action)=>{
            state.loading = 'failed'
            state.error = 'Can not download movies data🤕'
        })
        // delete movie
        .addCase(deleteMovie.fulfilled,(state,action)=>{
            console.log(action.meta.arg)
            const id = state.movies.findIndex(movie=>movie.id === action.meta.arg)
            state.movies.splice(id,1)
            return
        })
        
        // search a movie success
        .addCase(searchBy.fulfilled,(state,action)=>{
            // console.log('results', action.payload)
            state.movies = action.payload
            return
        })

    },
})

export const {filter} = moviesSlice.actions


export const allMovies = state => state.movies.movies
export const allMoviesError = state => state.movies.error
export const allMoviesLoading = state => state.movies.loading

export default moviesSlice.reducer
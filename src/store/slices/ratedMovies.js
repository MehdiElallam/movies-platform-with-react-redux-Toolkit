import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../../api/axios'
import requests from '../../api/requests'

const initialState = {
    movies : [],
    loading : false,
    error : null
}
 
export const fetchTopRatedMovies = createAsyncThunk(
    'Movies/topRated',
    async() => {
        
        const { data } = await instance.get(requests.fetchTopRatedMovies)
        return data.results
    }
) 

const topRatedMovies = createSlice({
    name : 'MoviesTopRated',
    initialState,
    reducers : {},
    extraReducers : {
        [fetchTopRatedMovies.pending]: (state) => {
            state.loading = true;
        },
        [fetchTopRatedMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
            state.loading = false
        },
        [fetchTopRatedMovies.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    }

})

export default topRatedMovies.reducer
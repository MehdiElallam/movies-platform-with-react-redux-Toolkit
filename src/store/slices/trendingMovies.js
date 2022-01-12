import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../../api/axios'
import requests from '../../api/requests'

const initialState = {
    movies : [],
    loading : false,
    error : null
}
 
export const fetchTrendingMovies = createAsyncThunk(
    'Movies/trending',
    async() => {
        
        const { data } = await instance.get(requests.fetchTrending)
        return data.results
    }
) 

const trendingMovies = createSlice({
    name : 'MoviesTrending',
    initialState,
    reducers : {},
    extraReducers : {
        [fetchTrendingMovies.pending]: (state) => {
            state.loading = true;
        },
        [fetchTrendingMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
            state.loading = false
        },
        [fetchTrendingMovies.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    }

})

export default trendingMovies.reducer
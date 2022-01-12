import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../../api/axios'
import requests from '../../api/requests'

const initialState = {
    categories : [],
    loading : false,
    error : null
}
 
export const fetchCategoriesOfMovies = createAsyncThunk(
    'Movies/categories',
    async() => {
        
        const { data } = await instance.get(requests.fetchCategories)
        return data.genres
    }
) 

const categoriesOfMovies = createSlice({
    name : 'MoviesCategories',
    initialState,
    reducers : {},
    extraReducers : {
        [fetchCategoriesOfMovies.pending]: (state) => {
            state.loading = true;
        },
        [fetchCategoriesOfMovies.fulfilled]: (state, action) => {
            state.categories = action.payload
            state.loading = false
        },
        [fetchCategoriesOfMovies.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    }

})

export default categoriesOfMovies.reducer
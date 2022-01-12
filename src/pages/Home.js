import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTrendingMovies } from '../store/slices/trendingMovies'
import { fetchTopRatedMovies } from '../store/slices/ratedMovies'
import { fetchCategoriesOfMovies } from '../store/slices/categoriesOfMovies'
import Categories from '../components/Categories'
import MoviesList from '../components/MoviesList'
import Row from '../components/Row'


export default function Home() {

    const dispatch = useDispatch()
    const trendingMovies = useSelector(state => state.trendingMovies)
    const topRatedMovies = useSelector(state => state.topRatedMovies)
    const categoriesOfMovies = useSelector(state => state.categoriesOfMovies)

    // console.log(topRatedMovies)

    useEffect(() => {

        dispatch(fetchTrendingMovies())
        dispatch(fetchTopRatedMovies())
        dispatch(fetchCategoriesOfMovies())
    
    }, [dispatch])

    return (
        <>
            <div className='categories__content'>
                <div className='categories__inner'>
                    <Row title="Categories" />
                    <Categories categories={categoriesOfMovies.categories} />
                    <Row title="Filter by rating" />
                </div>
            </div>
            <div className='movies__content'>
                <Row title="Trending Now" />
                { !trendingMovies.loading && <MoviesList movies={trendingMovies.movies}   /> }

                <Row title="Top Rated" />
                { !topRatedMovies.loading && <MoviesList movies={topRatedMovies.movies}   /> }
            </div>
            
        </>
    )
}

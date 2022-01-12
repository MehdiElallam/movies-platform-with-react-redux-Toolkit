import React from 'react'


const baseURL = 'https://image.tmdb.org/t/p/original'

export default function MovieCard({movie}) {

    // console.log(movie)

    return (
        <div className='movie__item'>
            <div className='movie__rate'>
                {movie.vote_average}
            </div>
            <div className='movie__img'>
                <img src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className='movie__title'>
                <p>{movie.title}</p>
            </div>
            <div className='movie__description'>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

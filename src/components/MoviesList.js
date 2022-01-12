import React, { useEffect, useState, useRef } from 'react'
import MovieCard from './MovieCard'
import previousIcon from '../images/previous__icon.png'
import nextIcon from '../images/next__icon.png'



export default function MoviesList({movies}) {

    const [scrollX, setscrollX] = useState(250)
    
    const moviesRef = useRef()

    const moveNext = () => {

        setscrollX(scrollX + 250)

        moviesRef.current.scrollTo(scrollX, 0);

    }

    const movePrevious = () => {
        
        setscrollX(scrollX - 50)
        moviesRef.current.scrollTo(scrollX, 0);

    }


    return (
        <div ref={moviesRef} className='movies__list'>
            <div onClick={() => moveNext()} className='scroll__icon prev__movies'>
                <img src={previousIcon} />
            </div> 
            { movies.length > 0 &&  movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} /> 
            ))
            }
            <div onClick={() => moveNext()} className='scroll__icon next__movies'>
                <img src={nextIcon} />
            </div> 
        </div>
    )
}

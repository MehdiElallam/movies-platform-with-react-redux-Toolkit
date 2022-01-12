import React, { lazy, Suspense } from 'react'
import { Routes , Route } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound'


const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));


export default function RoutesList() {
    
    return (
        <Suspense fallback={<div>Loading... </div>} >
            <Routes>
                <Route exact={true} path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path='*' exact={true} element={<PageNotFound />} />
            </Routes>
        </Suspense>
    )
}

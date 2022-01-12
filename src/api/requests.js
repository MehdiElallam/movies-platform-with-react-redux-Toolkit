const APIKEY = 'aa72ae7487863064a4e89a279b113e40'

const requests = {
    fetchTrending : `/trending/movie/day?api_key=${APIKEY}`,
    fetchTopRatedMovies : `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetchLatestMovies : `/movie/latest?api_key=${APIKEY}&language=en-US`,
    fetchPopularMovies : `/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
    fetchCategories : `/genre/movie/list?api_key=${APIKEY}&language=en-US`
}

export default requests
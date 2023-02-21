import axios from "axios";

// const getMovie = async ({page, keyword}) => { 
const getMovie = async (body) => { 
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_ENV_VARIABLE}&s=${body.key}&page=${body.page}`)
    return response;
  } catch (error) {
    return error;
  }
}
const getDetailMovie = async (id) => { 
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_ENV_VARIABLE}&i=${id}`)
    return response;
  } catch (error) {
    return error;
  }
}


const movieService = {
  getMovie,
  getDetailMovie
}


export default movieService;

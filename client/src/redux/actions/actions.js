import { GET_VIDEOGAME, GET_DETAIL_VIDEOGAME, GET_BY_NAME, POST_VIDEOGAME, GET_GENRES, FILTER_GENRES  } from '../action-types/action-types'
import axios from 'axios';

export const getVideogames = (page = 1) => {
    return async (dispatch) => {
        const response = await axios('http://localhost:3001/videogames', { params: { page } })
        return dispatch({
            type: GET_VIDEOGAME,
            payload: response.data
        })
    }
}
export const getDetailVideogame = (id) => {
    return async (dispatch) => {
        const response = await axios(`http://localhost:3001/${id}`)
        return dispatch({
            type: GET_DETAIL_VIDEOGAME,
            payload: response.data
        })
    }
}
export const getGamesByName = (name) => {
    return async (dispatch) => {
        const response = await axios(`http://localhost:3001/`, { params: { name } })
        return dispatch({
            type: GET_BY_NAME,
            payload: response.data
        })
    }
}
export const postvideogame = (objGame) => {
    return async (dispatch) => {
        const response = await axios.post(`http://localhost:3001/videogames`,{ body: objGame })
        if (response.data) {
            response.data = 'created successfully'
        }
        return dispatch({
            type: POST_VIDEOGAME,
            payload: response.data
        })
    }
}
export const getGenres = () => {
    return async (dispatch) => {
        const response = await axios(`http://localhost:3001/api/genres`)
        return dispatch({
            type: GET_GENRES,
            payload: response.data
        })
    }
} 
export const filtergenres = (genrename) => { 
    return async (dispatch) => { 
        const response = await axios('http://localhost:3001/api/filter/genres', {params: {genrename}}) 
        return dispatch({ 
            type: FILTER_GENRES, 
            payload: response.data
        })
    }
}
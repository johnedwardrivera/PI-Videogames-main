import { GET_VIDEOGAME, GET_DETAIL_VIDEOGAME, GET_BY_NAME } from '../action-types/action-types'
import axios from 'axios';

export const getVideogames = (page = 1) => {
    return async (dispatch) => {
        const response = await axios('http://localhost:3001/videogames',{params:{page}})
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
        const response = await axios(`http://localhost:3001/`,{params:{name}})
        return dispatch({ 
            type: GET_BY_NAME, 
            payload: response.data       
        })   
    }
}
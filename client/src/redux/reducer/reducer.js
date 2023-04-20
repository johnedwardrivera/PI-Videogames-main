import { GET_VIDEOGAME, GET_DETAIL_VIDEOGAME, GET_BY_NAME } from '../action-types/action-types'

const initialState = {
    getVideoGame: [],
    getDetailGame: [],  

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAME:
            return {
                ...state,
                getVideoGame: action.payload, 
                videogame: action.payload

            }
        case GET_DETAIL_VIDEOGAME:
            return {
                ...state,
                getDetailGame: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                getVideoGame: action.payload
            }
        default:
            return { ...state }
    }
}

export default reducer
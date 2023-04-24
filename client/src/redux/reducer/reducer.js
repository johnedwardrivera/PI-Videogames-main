import { GET_VIDEOGAME, GET_DETAIL_VIDEOGAME, GET_BY_NAME, POST_VIDEOGAME, GET_GENRES, FILTER_GENRES, ORDER } from '../action-types/action-types'

const initialState = {
    getVideoGame: [],
    getDetailGame: [],
    postVideoGameCreate: "",
    getAllGenres: [],

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
        case POST_VIDEOGAME:
            return {
                ...state,
                postVideoGameCreate: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                getAllGenres: action.payload
            }
        case FILTER_GENRES:
            return {
                ...state,
                getVideoGame: action.payload
            }
        case ORDER:
            let copygetVideoGame = [...state.getVideoGame]
            if (action.payload == "Ascendente") {
                copygetVideoGame.sort()
            }
            if (action.payload == "Descendente") {
                copygetVideoGame.sort().reverse()
            }

            return {
                ...state,
                getVideoGame: copygetVideoGame

            }

        default:
            return { ...state }
    }
}

export default reducer
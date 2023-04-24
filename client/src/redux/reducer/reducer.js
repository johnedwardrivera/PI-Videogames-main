import { GET_VIDEOGAME, GET_DETAIL_VIDEOGAME, GET_BY_NAME, POST_VIDEOGAME, GET_GENRES, FILTER_GENRES, ORDER, ORDER_RATING  } from '../action-types/action-types'

const initialState = {
    getVideoGame: [],
    getDetailGame: [],
    postVideoGameCreate: "",
    getAllGenres: [], 
    videogame:[]

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
            let orderAsc = state.getVideoGame.slice().sort((a,b) => { 
                let videogameA = a.name.toLowerCase() 
                let videogameB = b.name.toLowerCase() 
                if(videogameA > videogameB) return 1 
                if(videogameB > videogameA) return -1 
                return 0   
            })  
            const allvideogames3 = state.videogame 
            const orderName = action.payload == 'asc' ? orderAsc : orderAsc.reverse()  
            return{ 
                ...state,  
                getVideoGame : action.payload == '' ? allvideogames3: orderName         
            }
        case ORDER_RATING: 
          let orderRatingAsc = state.getVideoGame.slice().sort((a, b) => { 
            if(Number(a.rating) > Number(b.rating)) return 1 
            if(Number(b.rating) > Number(a.rating)) return -1 
            return 0
        
        }) 
        return { 
            ...state, 
            getVideoGame: action.payload == 'asc' ? orderRatingAsc : orderRatingAsc.reverse()
        
        }

        default:
            return { ...state }
    }
}

export default reducer
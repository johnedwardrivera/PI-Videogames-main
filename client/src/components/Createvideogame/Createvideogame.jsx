import style from './Createvideogame.module.css' 
import { useDispatch, useSelector } from 'react-redux' 
import { getGenres } from '../../redux/actions/actions' 
import { React, useEffect } from 'react'

const Createvideogame = () => {  
    const dispatch = useDispatch() 
    const genres = useSelector((state) => state.getAllGenres)  
    console.log("los generos",genres)
   
     useEffect(() => { 
        dispatch(getGenres)  
    },[])

    return (
        <>
            <div>
                <form>
                    <label htmlFor="name" >name</label>
                    <input
                        type='text'
                        name='name'
                        value=''
                        placeholder='name'
                    />
                    <br></br>

                    <label htmlFor='description'>description</label>
                    <input
                        type='text'
                        name='escription'
                        value=''
                        placeholder='description'
                    />

                    <br></br>

                    <label htmlFor='platforms'>platforms</label>
                    <input
                        type='text'
                        name='platforms'
                        value=''
                        placeholder='platforms'
                    />
                    <br></br>

                    <label htmlFor="imagen">imagen</label>
                    <input
                        type='url'
                        name='imagen'
                        value=''
                        placeholder='imagen'
                    />

                    <br></br>
                    <label htmlFor='released'>released</label>
                    <input
                        type='url'
                        name='released'
                        value=''
                        placeholder='released'
                    />

                    <br></br>
                    <label htmlFor='rating' >rating</label>
                    <input
                        type='number'
                        name='rating'
                        value=''
                        placeholder='placeholde'

                    />
                    <br></br>
                    <label>genres</label>
                    <input
                        type='text'
                        name='genres'
                        value=''
                        placeholder='genres'
                    /> 
                    <br></br>
                    <button>submit</button>
                </form>
            </div>
        </>
    )
}

export default Createvideogame 

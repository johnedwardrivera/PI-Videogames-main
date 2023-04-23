import { useState } from 'react'
import { Link } from "react-router-dom";
import { getGamesByName } from '../../redux/actions/actions'
import { getGenres } from '../../redux/actions/actions' 
import { filtergenres } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux' 
import { getVideogames } from '../../redux/actions/actions'
import CardVideoGame from '../CardVideoGame/CardVideoGame'
import { React, useEffect } from 'react'
import style from './Home.module.css'

const HomePage = () => {
    const dispatch = useDispatch()
    const name = useSelector(state => state.name)
    const genres = useSelector((state) => state.getAllGenres)  
    const filter = useSelector((state) => state.getVideoGame) 
    console.log("filteeeeeeerrrrr",filter)
   

    const [searchString, setSearchString] = useState('')
    useEffect(() => {
        dispatch(getGenres())
    }, [])

    function handleChange(event) {
        // dispatch(getGamesByName(event.target.values))
        setSearchString(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        // console.log("hola nnn", searchString)  
        dispatch(getGamesByName(searchString))

    } 
    function handleChangeSelect(event){  
        dispatch(filtergenres(event.target.value)) 
    
    }



    return (
        <>
            {/* SearchBar */}
            <div className={style.grid}>
                <div className={style.searchbox} >
                    <input className={style.input} type="search" value={name} onChange={handleChange} placeholder='Enter a videogame...' />
                    <button className={style.btn} type='submit' onClick={handleSubmit}>buscar</button>
                </div>

                <div>
                    <Link to='/create'>
                        <button className={style.boton}>Create a new videogame</button>
                    </Link>
                </div>

                {/* filtrado por genero */}

                <select name="genre" onChange={handleChangeSelect} >
                    {genres?.map((gen) => (
                        <option value={gen.name}>{gen.name}</option>
                    ))}
                </select>
            </div>




            <div>
                <CardVideoGame />

            </div>
        </>

    )
}

export default HomePage
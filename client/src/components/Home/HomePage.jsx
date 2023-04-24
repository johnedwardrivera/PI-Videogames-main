import { useState } from 'react'
import { Link } from "react-router-dom";
import { getGamesByName } from '../../redux/actions/actions'
import { getGenres } from '../../redux/actions/actions'
import { filtergenres } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { orderCards } from '../../redux/actions/actions'
import { ordenRating } from '../../redux/actions/actions'
import { getVideogames } from '../../redux/actions/actions'
import CardVideoGame from '../CardVideoGame/CardVideoGame'
import { React, useEffect } from 'react'
import style from './Home.module.css'

const HomePage = () => {
    const dispatch = useDispatch()
    const name = useSelector(state => state.name)
    const genres = useSelector((state) => state.getAllGenres)
    const filter = useSelector((state) => state.getVideoGame)
    const [genregame, setGenregame] = useState('selecion')
    // console.log("filteeeeeeerrrrr", filter) 



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
    //filtrar por genero 
    function handleChangeSelect(event) {
        dispatch(filtergenres(event.target.value))

    }
    // ordernar Ascendente y Descendente
    function handlechangeorder(event) {
        dispatch(orderCards(event.target.value))

    }
    // ordenar rating 
    function handleChangeRating(event) {
        dispatch(ordenRating(event.target.value))

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
                <div>

                    <select name="genre" onChange={handleChangeSelect} >
                        {genres?.map((gen) => (
                            <option value={gen.name}>{gen.name}</option>
                        ))}
                    </select>
                </div>

                {/* ordenado */}
                <div>
                    <select onChange={handlechangeorder}>
                        <option value='asc'>(A - Z)</option>
                        <option value='desc'>(Z - A)</option>
                    </select>

                </div>
                <div>
                    <select onChange={handleChangeRating}>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </select>


                </div>

            </div>

            <div>
                <CardVideoGame />

            </div>
        </>

    )
}

export default HomePage
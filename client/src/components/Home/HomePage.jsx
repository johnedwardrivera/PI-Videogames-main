import { useState } from 'react'
import { Link } from "react-router-dom";
import { getGamesByName } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import CardVideoGame from '../CardVideoGame/CardVideoGame'
import style from './Home.module.css'

const HomePage = () => {
    const dispatch = useDispatch()
    const name = useSelector(state => state.name)
    const [searchString, setSearchString] = useState('')

    // function handleChange(e) { 
    //     e.preventDefault() 
    //     setSearchString(e.target.value) 
    // } 
    function handleChange(event) {
        // dispatch(getGamesByName(event.target.values))
        setSearchString(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        // console.log("hola nnn", searchString)  
        dispatch(getGamesByName(searchString))

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
            </div>

            <div>
                <CardVideoGame />

            </div>
        </>

    )
}

export default HomePage
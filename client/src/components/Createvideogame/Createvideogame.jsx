import style from './Createvideogame.module.css'
// import { useHistory } from "react-router-dom"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../redux/actions/actions'
import { postvideogame } from '../../redux/actions/actions'
import { React, useEffect } from 'react'

const Createvideogame = () => {
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.getAllGenres)
    console.log("los generos", genres)
    // const history = useHistory()

    const [input, setInput] = useState({
        name: "",
        description: "",
        platforms: "",
        image: "",
        released: "",
        rating: "",
        genres: [],
    })

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        platforms: "",
        image: "",
        released: "",
        rating: "",
        genres: [],

    })
    useEffect(() => {
        dispatch(postvideogame())
        dispatch(getGenres())
    }, [])

    const changeHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const selectGenreHandler = (e) => {
        e.preventDefault()
        if (!input.genres.includes(e.target.value)) {
            setInput({ ...input, genres: [...input.genres, e.target.value] })
        }
    }

    function deleteHandlerGenre(elem) {
        setInput({
            ...input,
            genres: input.genres.filter((gen) => gen != elem)

        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            postvideogame(input)
        )
        setInput({
            name: "",
            description: "",
            platforms: "",
            image: "",
            released: "",
            rating: "",
            genres: [],
        })
        // history.push("/homepage")
    }

    return (
        <>
            <div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <label htmlFor="name" >Name: </label>
                    <input
                        type='text'
                        value={input.name}
                        onChange={(e) => changeHandler(e)}
                        name='name'
                        placeholder='name'
                    />
                    <br></br>

                    <label htmlFor='description'>Description: </label>
                    <input
                        type='text'
                        value={input.description}
                        onChange={(e) => changeHandler(e)}
                        name='description'
                        placeholder='description'
                    />

                    <br></br>

                    <label htmlFor='platforms'>Platforms: </label>
                    <input
                        type='text'
                        value={input.platforms}
                        onChange={(e) => changeHandler(e)}
                        name='platforms'
                        placeholder='platforms'
                    />
                    <br></br>

                    <label htmlFor="image">Image: </label>
                    <input
                        type='url'
                        value={input.image}
                        onChange={(e) => changeHandler(e)}
                        name='image'
                        placeholder='Add url'
                    />

                    <br></br>
                    <label htmlFor='released'>Released: </label>
                    <input
                        type='date'
                        value={input.released}
                        onChange={(e) => changeHandler(e)}
                        name='released'
                        placeholder='released'
                    />

                    <br></br>
                    <label htmlFor='rating' >Rating: </label>
                    <input
                        type='number'
                        value={input.rating}
                        onChange={(e) => changeHandler(e)}
                        name='rating'
                        placeholder='rating'

                    />
                    <br></br>
                    <div>
                        <label htmlFor='genres' >Genres: </label>
                        {genres?.map((gen) => (
                            <button
                                value={gen.name}
                                key={gen.name}
                                onClick={(e) => selectGenreHandler(e)}
                                name='genres'

                            >
                                {gen.name}

                            </button>
                        ))}
                    </div>
                    <div>
                        <h4>Preview</h4>
                        <h3>Name: {input.name}</h3>
                        <h4>Description:{input.description}</h4>
                        <p>Platforms:{input.platforms}</p>
                        <p>Released:{input.released}</p>
                        <p>Rating:{input.rating}</p>
                        <p>Genres:</p>
                        {input.genres.map((gen) =>
                            <button style={{width:'80px', height:'19px'}}
                                key={gen}
                                onClick={() => deleteHandlerGenre(gen)}
                                name="genres"
                            >

                            </button>
                        )}

                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        </>
    )
}

export default Createvideogame 

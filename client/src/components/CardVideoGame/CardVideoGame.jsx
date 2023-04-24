import style from './cardVodeoGame.module.css'
import Bringvideogame from './Bringvideogame'
import { useDispatch, useSelector } from 'react-redux'
import { React, useEffect, useState } from 'react'
import { getVideogames } from '../../redux/actions/actions'

const CardVideoGame = () => {
    // dispactch
    const dispatch = useDispatch()
    const game = useSelector((state) => state.getVideoGame)
    console.log("game del dispatch", game)

    //despachar
    useEffect(() => {
        dispatch(getVideogames())
        // console.log("todos los juegos", game)
        // pages();
    }, [])


    function pages(params = 1, value = 'normal') {
        dispatch(getVideogames(params))
        console.log("todos los juegos", params)
    }


    return (
        <>
            <div className={style.container}>
                {
                    game.map((games, index) => {
                        return (
                            <>
                                {
                                    games.image != undefined
                                        ?
                                        <>
                                            <Bringvideogame
                                                key={games?.index}
                                                id={games?.id}
                                                background_image={games?.image}
                                                name={games?.name}
                                                genres={games?.genres}
                                            />

                                        </>

                                        :
                                        <Bringvideogame
                                            key={games?.index}
                                            id={games?.id}
                                            name={games?.name}
                                            background_image={games?.background_image}
                                            genres={games?.genres}

                                        />
                                }

                            </>
                        )
                    })
                }

            </div>
            <div>
                {/* <button className="page-link"  onClick={() => pages(1)}>1</a></button>
                    <li className="page-item"><a className="page-link"  onClick={() => pages(2)}>2</a></li> */}
                <button className={style.boton} onClick={() => pages(1)}>1</button>
                <button className={style.boton} onClick={() => pages(2)}>2</button>
                <button className={style.boton} onClick={() => pages(3)}>3</button>
                <button className={style.boton} onClick={() => pages(4)}>4</button>
                <button className={style.boton} onClick={() => pages(5)}>5</button>
            </div>
        </>
    )


}

export default CardVideoGame
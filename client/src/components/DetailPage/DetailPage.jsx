import style from './DetailPage.module.css'
import GamePageDatail from './GamePageDatail'
import { getDetailVideogame } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const DetailPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const gameDetail = useSelector((state) => state.getDetailGame)
    console.log("holaaa", gameDetail.platforms)

    useEffect(() => {
        dispatch(getDetailVideogame(id))
    }, [dispatch, id])

    return (
        <>
            <div className={style.containerdetail}>
                {
                    gameDetail.image != undefined ?
                        <GamePageDatail
                            key={gameDetail?.index}
                            background_image={gameDetail?.image}
                            id={gameDetail?.id}
                            name={gameDetail?.name}
                            genres={gameDetail?.genres}
                            platforms={gameDetail.platforms}
                            released={gameDetail?.released}
                            rating={gameDetail?.rating}
                            description={gameDetail?.description_raw}

                        />
                        :
                        <GamePageDatail
                            key={gameDetail?.index}
                            background_image={gameDetail?.background_image}
                            id={gameDetail?.id}
                            name={gameDetail?.name}
                             genres={gameDetail?.genres}
                             platforms={gameDetail?.platforms}
                            released={gameDetail?.released}
                            rating={gameDetail?.rating}
                            description={gameDetail?.description_raw}
                        />
                }

            </div>
        </>
    )
}

export default DetailPage
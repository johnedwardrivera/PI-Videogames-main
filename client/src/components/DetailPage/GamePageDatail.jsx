import { Link } from 'react-router-dom'
import style from './GamePageDatail.module.css'
const GamePageDatail = ({ id, key, name, genres, background_image, platforms, released, rating, description }) => {
    return (
        <div className={style.detailcard}>
            <p>{key}</p>
            <p>{id}</p>
            <img src={background_image}></img>
            <h2>{name}</h2>
            <p>{genres?.map(el => el.name)}</p>
            <p>{platforms?.map(el=> el.platform.name)}</p>
             <p>{released}</p>
             <p>{rating}</p>
             <p>{description}</p> 
        </div>
    )
}

export default GamePageDatail
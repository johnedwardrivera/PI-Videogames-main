import { Link } from 'react-router-dom'
import style from './GamePageDatail.module.css'
const GamePageDatail = ({ id, key, name, genres, background_image, platforms, released, rating, description }) => {
    return (
        <div className={style.detailcard} key={key}>
            <p>{id}</p>
            <img src={background_image}></img>
            <h2>{name}</h2>
            <p>{genres?.map(el => el.name)}</p>
            { typeof platforms === 'string' ? <p>{platforms}</p> : <p>{platforms?.map(el=> el.platform.name)}</p>}
            {/* <p>{platforms}</p> */}
             <p>{released}</p>
             <p>{rating}</p>
             <p>{description}</p> 
        </div>
    )
}

export default GamePageDatail
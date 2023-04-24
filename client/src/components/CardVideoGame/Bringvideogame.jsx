import style from './Bringvideogame.module.css'
import { Link } from 'react-router-dom'

const Bringvideogame = ({ id, key, name, genres, background_image }) => {
    return (
        <div className={style.card} key={key}>
            <p>{id}</p>
            <img src={background_image}></img>
            <p>{genres}</p>
            <Link to={`/gamedetail/${id}`}>
                <h2>{name}</h2>
            </Link>
        </div>

    )
}

export default Bringvideogame
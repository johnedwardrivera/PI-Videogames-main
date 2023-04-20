import React from 'react'
import { Link } from "react-router-dom";
import style from './LandingPage.module.css'
import img from '../../img/mario.gif'
import img2 from '../../img/starts.gif'
import img3 from '../../img/moneda.gif'

const LandingPage = () => {
    return (
        <div className={style.container}>
            <div className={style.welcome}>
                <img src={img} alt=""
                    tyle={{
                        width: '220px',
                        height: '220px',
                        float: 'left',
                        position: 'relative',
                        top: '25em'
                    }}

                />

            </div>
            <div className={style.containerbtn}>
                <div>
                    <img src={img3} style={{
                        width: '50px',
                        height: '50px',
                        position: 'relative',
                        top: '5em'
                    }}


                    ></img>


                </div>

                <div className={style.btn}>
                    <Link to='/homepage'>
                        <img src={img2} alt="" />
                    </Link>
                </div>
            </div>


        </div>


    )
}

export default LandingPage
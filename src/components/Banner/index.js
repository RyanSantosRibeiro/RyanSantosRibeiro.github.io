import React from 'react';
import background1 from '../../assets/images/background_home.jpg';
import neblina1 from '../../assets/images/neblina1.png';
import neblina2 from '../../assets/images/neblina2.png';

import pdf from '../../assets/images/curriculo.pdf';

import social3 from '../../assets/images/social/linkedin.png';
import social4 from '../../assets/images/social/cv.png';
import './style.scss';

const Banner = () => {
    return  (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-content__image" style={{backgroundImage:`url(${background1})`}}>
                    <img className='neblina1 neblina' src={neblina1} alt=""/>
                    <img className='neblina2 neblina' src={neblina2} alt=""/>
                </div>
                <div className='banner-content__titulo'>
                    <h3>Olá, <span>bem-vindo ao meu</span></h3>
                    <h2>Portifólio</h2>
                </div>
                <div className='banner-content__buttons'>
                    <div className="banner-content__button">
                            <a href='https://www.linkedin.com/in/ryan-santos-ribeiro/' target="_blanck">
                                <img alt="Linkedin" src={social3} />
                            </a>
                    </div>
                    <div className="banner-content__button">
                            <a href={pdf} download target="_blanck">
                                <img alt="Curriculo" src={social4} />
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
import React from 'react';
import './style.scss';
import lapa from '../../assets/images/lapa2.png';
import birds from '../../assets/images/birds.png';
import triangulo1 from '../../assets/images/triangulo1.png';
import triangulo2 from '../../assets/images/triangulo2.png';

const About = () => {
    return  (
        <div className="about" id='about'>
            <div className="content">
                <div className='about-text'>
                    <h2 className='default-title'>Sobre</h2>
                    <div className='about-texts'>
                        <p className='about-text__text'> 
                            Desenvolvedor Fullstack aqui no Rio de Janeiro por mais de 4 anos. 
                            Durante esse tempo adquiri experiencia em gestão de projetos (Desenvolvimento até GoLive), 
                            e cordenação de equipe na produção de sites.
                            <br/>
                            <br/>
                            Possuo conhecimento tambem no desenvolvimento Landing Page, projetos front-end (Toda interface do usário) e back-end (Servidores com node e express), até criação de banco de dados (MySQL e Sequelize).
                        </p>
                        <p className='about-text__text'>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <p className='about-text__text'>printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>
                <div className='about-images'>
                    <img className='birds' src={birds}  alt=""/>
                    <img className='lapa' src={lapa}  alt=""/>
                </div>
            </div>
            <div className='about-info-1'>
                <div className='about-info-1--button'>
                    <img className='about-info-1--button__arrow' src={triangulo1} alt=""/>
                </div>
            </div>
            <div className='about-info-2'>
                <div className='about-info-2--button'>
                    <img className='about-info-2--button__arrow' src={triangulo2} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default About;
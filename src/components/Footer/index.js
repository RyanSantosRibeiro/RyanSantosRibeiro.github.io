import React from 'react';
import './style.scss';

const Footer = (props) => {
    console.log(props);
    return  (
        <div className="footer" id='footer'>
            <div className="content">
                <div className='footer__menu'>
                    <div className='footer__menu__column'>
                        <h4>Ryan <br/> Santos</h4>
                    </div>
                    <div className='footer__menu__column'>
                        <p>Menu</p>
                        <a href='#about'>Sobre</a>
                        <a href='#skill'>Habilidades</a>
                        <a href='#job'>Trabalhos</a>
                        <a href='#contact'>Contato</a>
                    </div>
                    <div className='footer__menu__column'>
                        <p>Redes Sociais</p>
                        <a href='https://www.linkedin.com/in/ryan-santos-ribeiro/'>Linkdin</a>
                        <a href='https://www.instagram.com/ryan.santosrj/'>Instagram</a>
                        <a href='https://api.whatsapp.com/send?phone=5521995084896'>Whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react';
import './style.scss';

import bg from '../../assets/images/background_home.jpg';
import social1 from '../../assets/images/social/whatsapp.png';
import social2 from '../../assets/images/social/instagram.png';
import social3 from '../../assets/images/social/linkedin.png';
import social4 from '../../assets/images/social/cv.png';
import pdf from '../../assets/images/curriculo.pdf';


const Contact = (props) => {
    console.log(props);
    return  (
        <div className="contact" id='contact' style={{backgroundImage:`url(${bg})`}}>
            <div className="content">
                <div className='contact-title'>
                    <h2 className='default-title'>Vamos trabalhar juntos ?</h2>
                    <p>Vamos !</p>
                </div>
                <div className='contact-form'>
                    <div className='form-contact'>
                        <input type="text" id='name' placeholder='Nome' />
                        <input type="text" id='message' placeholder='Mensagem' />
                        <a href='/' id='send'>Enviar</a>
                    </div>
                    <div className='social-contact'>
                        <div>
                            <a className='whatsapp' href='https://api.whatsapp.com/send?phone=5521995084896/' target="_blanck">
                                <img alt="Whatsapp" src={social1} />
                            </a>
                            <a href='https://www.instagram.com/ryan.santosrj/' target="_blanck">
                                <img alt="Instagram" src={social2} />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/ryan-santos-ribeiro/' target="_blanck">
                                <img alt="Linkedin" src={social3} />
                            </a>
                            <a href={pdf} download target="_blanck">
                                <img alt="Curriculo" src={social4} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
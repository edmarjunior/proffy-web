import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFwv8UkswG8Ew/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=u2aP7B5CIvOe0yZ2GduXwtH9LZgI9DEQKZaiJfj9ypE" alt="avatar"/>
                <div>
                    <strong>Edmar Costa</strong>
                    <span>Sistemas de informação</span>
                </div>
            </header>
            <p>
                O incentivo ao avanço tecnológico
                <br />
                <br />
                Assim como a consulta aos diversos militantes agrega valor ao estabelecimento das direções preferenciais no sentido do progresso.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
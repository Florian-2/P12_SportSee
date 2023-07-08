import { Link } from 'react-router-dom';

import style from './notFound.module.css';

function NotFound({ message }: { message: string }) {
    return (
        <div className={style.noResult}>
            <h2 className={style.title}>{message}</h2>
            <Link to="/" className={style.link}>Revenir à la page d'accueil</Link>
        </div>
    );
}

export default NotFound;
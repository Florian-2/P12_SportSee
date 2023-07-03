import { NavLink } from 'react-router-dom';

import style from './header.module.css';
import logo from '../../assets/icons/logo.svg';


export function Header() {
    return (
        <header className={style.header}>
            <img src={logo} alt="Logo SportSee" />

            <nav className={style.navigation}>
                <NavLink to="/" className={style.link}>Accueil</NavLink>
                <NavLink to="/profil" className={style.link} >Profil</NavLink>
                <NavLink to="/construction" className={style.link}>Réglage</NavLink>
                <NavLink to="/construction" className={style.link}>Communauté</NavLink>
            </nav>
        </header>
    );
}
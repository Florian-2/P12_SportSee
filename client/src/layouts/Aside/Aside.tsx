import logoRelax from '../../assets/icons/relax.svg';
import logoSwim from '../../assets/icons/swim.svg';
import logoBike from '../../assets/icons/bike.svg';
import logoWeight from '../../assets/icons/weight.svg';
import style from './aside.module.css';


export function Aside() {
    return (
        <aside className={style.aside}>
            <ul className={style.list}>
                <li className={style.icon}>
                    <img src={logoRelax} alt="logo relax" />
                </li>

                <li className={style.icon}>
                    <img src={logoSwim} alt="logo natation" />
                </li>

                <li className={style.icon}>
                    <img src={logoBike} alt="logo vélo" />
                </li>

                <li className={style.icon}>
                    <img src={logoWeight} alt="logo poid" />
                </li>
            </ul>

            <p className={style.copyright}>Copyright, SportSee 2023</p>
        </aside>
    );
}
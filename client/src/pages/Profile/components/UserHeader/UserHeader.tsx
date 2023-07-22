import { User } from '@/interfaces';
import style from './UserHeader.module.css';


export function UserHeader({ user }: { user: User }) {
    return (
        <div className={style.header}>
            <h1 className={style.title}>Bonjour <span className={style.name}>{user.userInfos.firstName}</span></h1>
            <h2 className={style.congrats}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    );
}
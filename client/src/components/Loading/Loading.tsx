import style from './loading.module.css';

export function Loading() {
    return (
        <div className={style.loader}>
            <div className={style.item}></div>
            <div className={style.item}></div>
            <div className={style.item}></div>
            <div className={style.item}></div>
        </div>
    );
}
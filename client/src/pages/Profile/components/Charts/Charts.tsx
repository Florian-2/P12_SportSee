import { UserData } from '../../../../interfaces';
import { ChartActivity } from './ChartActivity/ChartActivity';
import { Informations } from './Informations/Informations';

import style from './charts.module.css';


export function Charts({ data }: { data: UserData }) {
    const [ userInfos, userActivity, userAverageSession, userPerformance ] = data;

    return (
        <div className={style.layoutChart}>
            <ChartActivity data={userActivity.data} className={style.activity}/>
            <Informations user={userInfos.data}/>
        </div>
    );
}
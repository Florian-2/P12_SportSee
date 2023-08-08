import { UserData } from "../../../../interfaces";
import { ChartActivity } from "./ChartActivity/ChartActivity";
import { ChartPerformance } from "./ChartPerformance/ChartPerormance";
import { ChartScore } from "./ChartScore/CharScore";
import { ChartSession } from "./ChartSession/ChartSessions";
import { Informations } from "./Informations/Informations";

import style from "./charts.module.css";

export function Charts({ data }: { data: UserData }) {
	const [userInfos, userActivity, userAverageSession, userPerformance] = data;

	return (
		<div className={style.layoutChart}>
			<ChartActivity data={userActivity.data} className={style.activity} />
			<Informations user={userInfos.data} className={style.infos} />

			<ChartSession data={userAverageSession.data} className={style.sessions} />
			<ChartPerformance data={userPerformance.data} className={style.performance} />
			<ChartScore score={userInfos.data.score} className={style.score} />
		</div>
	);
}

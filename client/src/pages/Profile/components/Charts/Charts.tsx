import { UserDataFormat } from "@/interfaces";
import { ChartActivity } from "./ChartActivity/ChartActivity";
import { ChartPerformance } from "./ChartPerformance/ChartPerformance";
import { ChartScore } from "./ChartScore/CharScore";
import { ChartSession } from "./ChartSession/ChartSessions";
import { Informations } from "./Informations/Informations";

import style from "./charts.module.css";

export function Charts({ data }: { data: UserDataFormat }) {
	return (
		<div className={style.layoutChart}>
			<ChartActivity data={data.activity} className={style.activity} />
			<Informations user={data.mainData} className={style.infos} />

			<ChartSession data={data.averageSessions} className={style.sessions} />
			<ChartPerformance data={data.performances} className={style.performance} />
			<ChartScore score={data.mainData.score} className={style.score} />
		</div>
	);
}

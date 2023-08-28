import { Charts } from "./Charts/Charts";
import { UserHeader } from "./UserHeader/UserHeader";

import style from "../profile.module.css";
import { UserData as TypeUserData } from "@/interfaces";
import { UserData } from "@/services/fomat";

export function Content({ data }: { data: TypeUserData }) {
	const userData = new UserData(data);

	return (
		<div className={style.dashboard_container}>
			<UserHeader user={userData.getMainData()} />

			<Charts
				data={{
					mainData: userData.getMainData(),
					activity: userData.getSessions(),
					averageSessions: userData.getAverageSessions(),
					performances: userData.getPerformances(),
				}}
			/>
		</div>
	);
}

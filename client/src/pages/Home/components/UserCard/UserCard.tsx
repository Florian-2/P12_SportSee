import { useOutletContext, useNavigate } from "react-router-dom";
import { User, UserContext } from "@/interfaces";

import style from "./userCard.module.css";

export function UserCard({ user }: { user: User }) {
	const [, setActiveUserId] = useOutletContext<UserContext>();
	const navigate = useNavigate();

	const navigateToProfile = () => {
		setActiveUserId(user.id);
		navigate(`/profile/${user.id}`);
	};

	return (
		<div className={style.userCard}>
			<span>
				<strong>ID</strong>: {user.id}
			</span>

			<ul className={style.data}>
				<li>
					<strong>Nom</strong>: {user.userInfos.firstName} {user.userInfos.lastName}
				</li>
				<li>
					<strong>Age</strong>: {user.userInfos.age}
				</li>
			</ul>

			<button className={style.btn} onClick={navigateToProfile}>
				Voir le profil
			</button>
		</div>
	);
}

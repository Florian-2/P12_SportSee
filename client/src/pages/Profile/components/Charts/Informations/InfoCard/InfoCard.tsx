import IconEnergy from "@/assets/icons/energy.svg";
import IconChicken from "@/assets/icons/chicken.svg";
import IconBurger from "@/assets/icons/cheeseburger.svg";
import IconApple from "@/assets/icons/apple.svg";

import style from "./infoCard.module.css";

type Label = Record<string, { name: string; unit: string; icon: string; className: string }>;

const LABEL: Label = {
	calorieCount: { name: "Calories", unit: "Kcal", icon: IconEnergy, className: style.icon_calorie },
	proteinCount: { name: "Proteines", unit: "kg", icon: IconChicken, className: style.icon_protein },
	carbohydrateCount: { name: "Glucides", unit: "kg", icon: IconBurger, className: style.icon_carbohydrate },
	lipidCount: { name: "Lipides", unit: "kg", icon: IconApple, className: style.icon_lipid },
};

export function InfoCard({ info }: { info: [string, number] }) {
	const [key, value] = info;

	const formatNumber = (value: number) => new Intl.NumberFormat("en").format(value);

	return (
		<div className={style.card}>
			<div className={`${style.container_icon} ${LABEL[key].className}`}>
				<img src={LABEL[key].icon} alt={LABEL[key].name} className={style.icon} width="20px" height="auto" />
			</div>

			<div className={style.info}>
				<span className={style.value}>
					{formatNumber(value)}
					{LABEL[key].unit}
				</span>
				<span className={style.unit}>{LABEL[key].name}</span>
			</div>
		</div>
	);
}

import { TooltipProps } from "recharts";
import style from "./tooltip.module.css";

export function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
	if (!active || !payload || payload.length === 0) {
		return null;
	}

	return (
		<div className={style.tooltip}>
			<p>{payload[0]?.payload?.kilogram}kg</p>
			<p>{payload[1]?.payload?.calories}kcal</p>
		</div>
	);
}

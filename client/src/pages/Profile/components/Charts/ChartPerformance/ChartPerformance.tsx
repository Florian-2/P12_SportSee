import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import { UserPerformance } from "@/interfaces";

import style from "./chartPerformance.module.css";

const LABEL: Record<string, string> = {
	1: "Cardio",
	2: "Energie",
	3: "Endurance",
	4: "Force",
	5: "Vitesse",
	6: "Intensité",
};

export function ChartPerformance({ data, className }: { data: UserPerformance; className?: string }) {
	return (
		<div className={`${style.chart_performance} ${className ? className : ""}`}>
			<div className={style.chart}>
				<ResponsiveContainer>
					<RadarChart outerRadius="75%" data={data.data}>
						<PolarGrid radialLines={false} />
						<PolarAngleAxis
							dataKey="kind"
							stroke="white"
							tickSize={10}
							tickLine={false}
							axisLine={false}
							tickFormatter={(value: number) => LABEL[value]}
							fontSize={12}
						/>
						<Radar name="Performance" dataKey="value" fillOpacity={0.65} fill="#FF0101" />
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

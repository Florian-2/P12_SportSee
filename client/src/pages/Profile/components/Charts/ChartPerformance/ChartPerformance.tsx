import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import { UserPerformance } from "@/interfaces";

import style from "./chartPerformance.module.css";

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
							tickFormatter={(value: number) => data.kind[value - 1]}
							fontSize={12}
						/>
						<Radar name="Performance" dataKey="value" fillOpacity={0.65} fill="#FF0101" />
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

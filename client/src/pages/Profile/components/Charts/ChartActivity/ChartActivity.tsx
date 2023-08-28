import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Legend, Tooltip } from "recharts";

import { CustomTooltip } from "./CustomTooltip/CustomTooltip";
import { UserActivity } from "@/interfaces";

import style from "./chartActivity.module.css";

export function ChartActivity({ data, className }: { data: UserActivity[]; className?: string }) {
	return (
		<div className={`${style.activity} ${className ? className : ""}`}>
			<h3 className={style.label}>Activité quotidienne</h3>

			<ResponsiveContainer>
				<BarChart
					data={data}
					barSize={7}
					barGap={8}
					style={{
						fontSize: "1.4rem",
						fontWeight: 500,
					}}
				>
					<CartesianGrid strokeDasharray="3" vertical={false} />
					<XAxis
						dataKey="day"
						tick={{ fill: "#9B9EAC" }}
						tickLine={false}
						stroke="#DEDEDE"
						strokeWidth={2}
						tickMargin={16}
						tickFormatter={(_, i) => (i + 1).toString()}
					/>
					<YAxis
						yAxisId="kilogram"
						orientation="right"
						tickMargin={30}
						tick={{ fill: "#9B9EAC" }}
						tickLine={false}
						axisLine={false}
						domain={["dataMin-2", "dataMax+1"]}
						tickCount={3}
					/>
					<YAxis hide yAxisId="calories" />

					<Tooltip content={<CustomTooltip />} />

					<Bar name="Poids (kg)" dataKey="kilogram" yAxisId="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} />
					<Bar
						name="Calories brûlées (kCal)"
						dataKey="calories"
						yAxisId="calories"
						fill="#E60000"
						radius={[3, 3, 0, 0]}
					/>
					<Legend verticalAlign="top" align="right" iconType="circle" iconSize={10} height={80} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

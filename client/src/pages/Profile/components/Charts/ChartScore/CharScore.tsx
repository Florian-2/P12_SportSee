import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

import style from "./chartScore.module.css";

export function ChartScore({ score, className }: { score: number; className?: string }) {
	const data = [
		{
			name: "uncompleted",
			value: 100,
			fill: "white",
		},
		{
			name: "completed",
			value: score * 100,
			fill: "#FF0101",
		},
	];

	return (
		<div className={`${style.chart_score} ${className ? className : ""}`}>
			<h3 className={style.title}>Score</h3>

			<div className={style.container_percentage}>
				<span className={style.percentage}>{Number(score) * 100}%</span>
				<span className={style.text}>de votre objectif</span>
			</div>

			<div className={style.chart}>
				<ResponsiveContainer>
					<RadialBarChart
						innerRadius="80%"
						data={data}
						barSize={10}
						startAngle={90}
						endAngle={450}
						title="Vote Score"
					>
						<RadialBar
							width="100%"
							height="100%"
							background={{ fill: "white" }}
							cornerRadius={5}
							max={100}
							dataKey="value"
						/>
					</RadialBarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";
import { CustomTooltip } from "./CustomTooltip/CustomTooltip";
import { UserAverageSession } from "../../../../../interfaces";

import style from "./chartLine.module.css";


const LABEL = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export function ChartSession({ data, className } : { data: UserAverageSession, className?: string }) {
	return (
		<div className={`${style.chart_sessions} ${className ? className : ""}`}>
            <h3 className={style.title}>Durée moyenne des sessions</h3>

			<ResponsiveContainer>
				<LineChart data={data.sessions}>
					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="url(#colorUv)"
						strokeWidth={2.5}
						activeDot={{
							stroke: '#FFF',
							strokeWidth: 4,
							r: 2,
						}}
						dot={false}
					/>
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tick={{
							fill: 'rgba(255,255,255,0.6)',
							fontSize: '1.5rem',
						}}
						tickFormatter={(value) => LABEL[value - 1]}
						// tickMargin={20}
					/>
					<Tooltip content={<CustomTooltip />} cursor={false} />
					<YAxis hide domain={['dataMin-10', 'dataMax+10']} />
					<defs>
						<linearGradient
							id="colorUv"
							x1="0%"
							y1="0"
							x2="100%"
							y2="0"
						>
							<stop
								offset="0%"
								stopColor="rgba(255, 255, 255, 0.3)"
							/>
							<stop
								offset="20%"
								stopColor="rgba(255, 255, 255, 0.4)"
							/>
							<stop
								offset="40%"
								stopColor="rgba(255, 255, 255, 0.5)"
							/>
							<stop
								offset="60%"
								stopColor="rgba(255, 255, 255, 0.6)"
							/>
							<stop
								offset="100%"
								stopColor="rgba(255, 255, 255, 1)"
							/>
						</linearGradient>
					</defs>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

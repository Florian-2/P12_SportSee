import { TooltipProps } from 'recharts/types/component/Tooltip';

import style from './tooltip.module.css';


export function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
    if (!active || !payload || payload.length === 0) {
		return null;
	}

    return (
        <div className={style.tooltip}>
            <p className={style.content}>{JSON.stringify(payload[0]?.payload?.sessionLength)}min</p>
        </div>
    );
}
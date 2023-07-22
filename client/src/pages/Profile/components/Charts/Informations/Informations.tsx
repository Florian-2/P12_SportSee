import { User } from '@/interfaces';
import { InfoCard } from './InfoCard/InfoCard';

import style from './informations.module.css';


export function Informations({ user, className }: { user: User, className: string }) {
    const format = Object.entries(user.keyData);

    const renderKeyDataCards = () => {
		return format.map((data, i) => (
            <InfoCard key={i} info={[...data]}/>
        ));
	};

    return (
        <div className={`${style.container_infos} ${className}`}>
            {renderKeyDataCards()}
        </div>
    );
}
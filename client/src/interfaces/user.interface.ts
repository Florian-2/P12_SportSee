export interface User {
	id: number;
	userInfos: {
		firstName: string;
		lastName: string;
		age: number;
	};
	score: number;
	keyData: {
		calorieCount: number;
		proteinCount: number;
		carbohydrateCount: number;
		lipidCount: number;
	};
}

export interface UserActivity {
	day: string;
	kilogram: number;
	calories: number;
}

export interface UserAverageSession {
	day: number;
	sessionLength: number;
}

export interface UserAverageSessionFormat {
	day: string;
	sessionLength: number;
}
export interface UserPerformance {
	kind: string[];
	data: {
		value: number;
		kind: number;
	}[];
}

export type UserContext = [activeUserId: number, setActiveUserId: React.Dispatch<React.SetStateAction<number>>];

export type UserDataFormat = {
	mainData: User;
	activity: UserActivity[];
	averageSessions: UserAverageSessionFormat[];
	performances: UserPerformance;
};

export type Activity = { sessions: UserActivity[] };
export type AverageSessions = { sessions: UserAverageSession[] };

export type UserData = [{ data: User }, { data: Activity }, { data: AverageSessions }, { data: UserPerformance }];

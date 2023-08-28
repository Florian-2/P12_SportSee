import {
	User,
	UserActivity,
	UserAverageSession,
	UserPerformance,
	UserData as TypeUserData,
	UserAverageSessionFormat,
} from "@/interfaces";

export class UserData {
	private mainData: User;
	private activity: UserActivity[];
	private averageSessions: UserAverageSessionFormat[];
	private performances: UserPerformance;

	constructor(data: TypeUserData) {
		this.mainData = this.formatMainData(data[0].data);
		this.activity = this.formatActivity(data[1].data);
		this.averageSessions = this.formatAverageSessions(data[2].data);
		this.performances = this.formatPerformances(data[3].data);
	}

	public getMainData() {
		return this.mainData;
	}
	public getSessions() {
		return this.activity;
	}
	public getAverageSessions() {
		return this.averageSessions;
	}
	public getPerformances() {
		return this.performances;
	}

	public formatMainData(data: User): User {
		const formattedData: User = {
			id: data.id,
			userInfos: {
				firstName: data.userInfos.firstName,
				lastName: data.userInfos.lastName,
				age: data.userInfos.age,
			},
			score: data.score,
			keyData: {
				calorieCount: data.keyData.calorieCount,
				proteinCount: data.keyData.proteinCount,
				carbohydrateCount: data.keyData.carbohydrateCount,
				lipidCount: data.keyData.lipidCount,
			},
		};

		return formattedData;
	}

	public formatActivity(activity: { sessions: UserActivity[] }): UserActivity[] {
		const formattedData: UserActivity[] = [];

		for (let i = 0; i < activity.sessions.length; i++) {
			formattedData.push({
				day: activity.sessions[i].day,
				kilogram: activity.sessions[i].kilogram,
				calories: activity.sessions[i].calories,
			});
		}

		return formattedData;
	}

	public formatAverageSessions(averageSessions: { sessions: UserAverageSession[] }): UserAverageSessionFormat[] {
		const formattedData: UserAverageSessionFormat[] = [];
		const DAYS = ["L", "M", "M", "J", "V", "S", "D"];

		for (let i = 0; i < averageSessions.sessions.length; i++) {
			formattedData.push({
				day: DAYS[averageSessions.sessions[i].day - 1],
				sessionLength: averageSessions.sessions[i].sessionLength,
			});
		}

		return formattedData;
	}

	public formatPerformances(performances: UserPerformance) {
		const formattedData: UserPerformance = {
			kind: ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"],
			data: [],
		};

		for (let i = 0; i < performances.data.length; i++) {
			formattedData.data.push(performances.data[i]);
		}

		return formattedData;
	}
}

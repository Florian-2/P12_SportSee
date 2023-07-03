interface User {
    id: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    },
    score: string;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    }
}

interface UserActivity {
    userId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[]
}

interface UserAverageSession {
    userId: number;
    sessions: {
        day: number;
        sessionLength: number;
    }[]
}

interface UserPerformance {
    userId: number;
    kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
    };
    data: {
        value: number;
        kind: number;
    }[]
}
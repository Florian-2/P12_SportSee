import { User } from "@/interfaces";

const BASE_URL = "http://localhost:3000";

export async function getAllUsers(): Promise<User[] | { data: User[] }> {
	try {
		const res = await fetch(`${BASE_URL}/users`);

		if (!res.ok) {
			throw new Error();
		}

		return res.json();
	} catch (e) {
		const res = await fetch("/src/mock/users.json");
		return res.json();
	}
}

export async function getOneUserById(id: number | string) {
	try {
		const requests = [
			fetch(`${BASE_URL}/user/${id}`),
			fetch(`${BASE_URL}/user/${id}/activity`),
			fetch(`${BASE_URL}/user/${id}/average-sessions`),
			fetch(`${BASE_URL}/user/${id}/performance`),
		];

		const responses = await Promise.all(requests);

		for (const res of responses) {
			if (!res.ok) {
				throw new Error();
			}
		}

		const jsonPromises = responses.map((res) => res.json());

		return Promise.all(jsonPromises);
	} catch (e) {
		const res = await fetch("/src/mock/data.json");
		const users = await res.json();

		const user = users[id];
		if (!user) throw new Error();

		return users[id];
	}
}

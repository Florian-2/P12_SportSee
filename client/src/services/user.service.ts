import { User } from "../interfaces";

const BASE_URL = "http://localhost:3000";

export async function getAllUsers(): Promise<User[]> {
    const res = await fetch(`${BASE_URL}/users`);

    if (!res.ok) {
        throw new Error("Aucun utilisateur n'est enregistré");
    }

    return res.json();
}

export async function getOneUserById(id: number | string) {
    const requests = [
        fetch(`${BASE_URL}/user/${id}`),
        fetch(`${BASE_URL}/user/${id}/activity`),
        fetch(`${BASE_URL}/user/${id}/average-sessions`),
        fetch(`${BASE_URL}/user/${id}/performance`),
    ];

    const responses = await Promise.all(requests);

    for (const res of responses) {
        if (!res.ok) {
            throw Error("Aucun utilisateur trouvé");
        }
    }

    const jsonPromises = responses.map((res) => res.json());

    return Promise.all(jsonPromises);
}
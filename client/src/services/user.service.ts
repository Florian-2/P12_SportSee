const BASE_URL = "http://localhost:3000";

export async function getAllUsers(): Promise<User[]> {
    const res = await fetch(`${BASE_URL}/users`);

    if (!res.ok) {
        throw new Error("Aucun utilisateur n'est enregistré");
    }

    return res.json();
}

export async function getOneUserById(id: number | string): Promise<User> {
    const res = await fetch(`${BASE_URL}/user/${id}`);

    if (!res.ok) {
        throw new Error("Utilisateur introuvable.");
    }

    return res.json();
}
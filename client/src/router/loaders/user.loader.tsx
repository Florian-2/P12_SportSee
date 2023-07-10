import { LoaderFunctionArgs, defer } from "react-router-dom";
import { getAllUsers, getOneUserById } from "../../services/user.service";


export async function getUsers() {
    const users = getAllUsers();

    return defer({ users });
}

export async function getOneUser({ params }: LoaderFunctionArgs) {
    const res = params.id && getOneUserById(params.id);

    return defer({ user: new Promise((resolve) => setTimeout(() => resolve(res), 8500)) });
}
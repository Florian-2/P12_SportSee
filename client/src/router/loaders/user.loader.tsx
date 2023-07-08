import { LoaderFunctionArgs, defer, redirect } from "react-router-dom";
import { getAllUsers, getOneUserById } from "../../services/user.service";


export async function getUsers() {
    const users = getAllUsers();

    return defer({ users });
}

export async function getOneUser({ params }: LoaderFunctionArgs) {
    const id = params.id;

    if (!id) {
        return redirect("/");
    }

    const user = getOneUserById(id);

    return defer({ user });
}
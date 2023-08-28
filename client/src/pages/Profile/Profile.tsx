import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { UserData } from "@/interfaces";

import { Loading } from "@/components/Loading/Loading";
import NotFound from "@/components/NotFound/NotFound";

import { Content } from "./components/Content";

function Profile() {
	const { user } = useLoaderData() as { user: UserData };

	return (
		<>
			<Suspense fallback={<Loading />}>
				<Await resolve={user} errorElement={<NotFound message="Aucun utilisateur trouvé" />}>
					{(data: UserData) => <Content data={data} />}
				</Await>
			</Suspense>
		</>
	);
}

export default Profile;

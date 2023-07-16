import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Header } from "./layouts/Header/Header";
import { Aside } from "./layouts/Aside/Aside";
import { UserContext } from "./interfaces/user.interface";
import "./App.css";
import { Loading } from "./components/Loading/Loading";


function App() {
	const location = useLocation();
	const [activeUserId, setActiveUserId] = useState(12);

	return (
		<>
			<Header userId={activeUserId}/>

			<main>
				{ location.pathname !== "/" && <Aside/> }

				<section>
					<Suspense fallback={<Loading/>}>
						<Outlet context={[activeUserId, setActiveUserId] satisfies UserContext}/>
					</Suspense>
				</section>
			</main>
		</>
	);
}

export default App;
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Header } from "./layouts/Header/Header";
import { Aside } from "./layouts/Aside/Aside";
import "./App.css";


function App() {
	const location = useLocation();

	return (
		<>
			<Header/>

			<main>
				{ location.pathname !== "/" && <Aside/> }

				<section>
					<Suspense fallback={<h1>Chargement...</h1>}>
						<Outlet/>
					</Suspense>
				</section>
			</main>
		</>
	);
}

export default App;
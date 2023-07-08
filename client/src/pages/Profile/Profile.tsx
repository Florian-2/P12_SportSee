import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { User } from '../../interfaces';
import NotFound from '../../components/NotFound/NotFound';

import style from './profile.module.css';


function Profile() {
    const { user } = useLoaderData() as { user: User, data: null };

    return (
        <>
            <Suspense fallback={<h1>Chargement...</h1>}>
                <Await resolve={user} errorElement={<NotFound message='Aucun utilisateur trouvé'/>}>
                    { (data) => <code>{JSON.stringify(data)}</code> }
                </Await>
            </Suspense>
        </>
    );
}

export default Profile;
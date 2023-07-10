import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { User } from '../../interfaces';
import NotFound from '../../components/NotFound/NotFound';

import style from './profile.module.css';
import { Loading } from '../../components/Loading/Loading';


function Profile() {
    const { user } = useLoaderData() as { user: User, data: null };

    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Await resolve={user} errorElement={<NotFound message='Aucun utilisateur trouvé'/>}>
                    { (data) => <code>{JSON.stringify(data)}</code> }
                </Await>
            </Suspense>
        </>
    );
}

export default Profile;
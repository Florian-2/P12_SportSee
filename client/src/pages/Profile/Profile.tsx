import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { User } from '../../interfaces';

import style from './profile.module.css';


function Profile() {
    const { user } = useLoaderData() as { user: User };

    return (
        <>
            <Suspense fallback={<h1>Chargement...</h1>}>
                <Await resolve={user}>
                    { (data) => <code>{JSON.stringify(data)}</code> }
                </Await>
            </Suspense>
        </>
    );
}

export default Profile;
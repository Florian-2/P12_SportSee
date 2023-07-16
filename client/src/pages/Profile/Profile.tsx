import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { UserData } from '../../interfaces';

import { Loading } from '../../components/Loading/Loading';
import { UserHeader } from './components/UserHeader/UserHeader';
import { Charts } from './components/Charts/Charts';
import NotFound from '../../components/NotFound/NotFound';

import style from './profile.module.css';


function Profile() {
    const { user } = useLoaderData() as { user: UserData };

    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Await resolve={user} errorElement={<NotFound message='Aucun utilisateur trouvé'/>}>
                    { ([ userInfos, ...data ]: UserData) => (
                        <div className={style.dashboard_container}>
                            <UserHeader user={userInfos.data} />

                            <Charts data={[ userInfos, ...data ]}/>
                        </div>
                    ) }
                </Await>
            </Suspense>
        </>
    );
}

export default Profile;
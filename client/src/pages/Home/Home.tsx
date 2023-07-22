import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { UserCard } from './components/UserCard/UserCard';
import { User } from '@/interfaces';

import style from './home.module.css';
import { Loading } from '@/components/Loading/Loading';


function Home() {
    const { users } = useLoaderData() as { users: User };

    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Await resolve={users}>
                    { ({ data }) => (
                        <div className={style.container}>
                            <h1 className={style.title}>Veuillez sélectionner un utilisateur :</h1>

                            <div className={style.list_users}>
                                {data.map((user: User) => <UserCard user={user} key={user.id}/>)}
                            </div>
                        </div>
                    )}
                </Await>
            </Suspense>
        </>
    );
}

export default Home;
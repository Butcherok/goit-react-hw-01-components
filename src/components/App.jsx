import user from 'data/user.json';
// import data from 'data/data.json';
// import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';
import { Profile } from './user/Profile';

export const App = () => {
    return (
        <Profile
            avatar={user.avatar}
            username={user.username}
            tag={user.username}
            location={user.location}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
    );
};

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';
import { Profile } from './user/Profile';
import { Statistics } from './stats/Stats';
import { FriendList } from './friends/FriendList';

export const App = () => {
    return (
        <>
            <Profile
                avatar={user.avatar}
                username={user.username}
                tag={user.username}
                location={user.location}
                stats={user.stats}
            />
            <Statistics stats={data} />
            <FriendList friends={friends} />
        </>
    );
};

import user from 'data/user.json';
// import data from 'data/data.json';
// import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';
import { Profile } from './user/Profile';


export const App = () => {
    return <Profile user={user} />;
};

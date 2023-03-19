import PropTypes from 'prop-types';
import css from './FriendList.module.css';

// import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css['friend-list']}>
            {friends.map(friend => (
                <li key={friend.id} class="item">
                    <span class="status"></span>
                    <img
                        class="avatar"
                        src={friend.avatar}
                        alt="User avatar"
                        width="48"
                    />
                    <p class="name">{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array,
    // title: PropTypes.string,
    // label: PropTypes.string,
    // percentage: PropTypes.string,
};

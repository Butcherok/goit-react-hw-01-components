import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friends }) => {
    return friends.map(friend => (
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
    ));
};

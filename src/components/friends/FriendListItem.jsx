import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    // var mode = {
    //     isOnline ? 'isOnline': 'isOffline'
    // };
    return (
        <>
            <span className={css.status}></span>
            <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p className={css.name}>{name}</p>
        </>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

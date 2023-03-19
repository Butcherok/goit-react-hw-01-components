import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FcApproval } from 'react-icons/fc';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const mode = [css.status];
    if (isOnline) {
        mode.push(css.isOnline);
    } else {
        mode.push(css.isOffline);
    }
    return (
        <>
            <span className={mode.join(' ')}>
                <FcApproval size={32}/>
            </span>
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

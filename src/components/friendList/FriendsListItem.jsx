import css from './friendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={css.item}>
        <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
    </li >
);

export default FriendListItem;
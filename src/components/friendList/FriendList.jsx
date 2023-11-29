import css from './friendList.module.css'
import FriendListItem from './FriendsListItem'

export default function FriendList({ friends }) {
    return (
        <ul className={css.list}>
            {friends.map(friend =>
                <FriendListItem 
                    key ={friend.id}
                    avatar={friend.avatar}
                    name={friend.name} 
                    isOnline={friend.isOnline}
                />
            )}
        </ul>
    )
}


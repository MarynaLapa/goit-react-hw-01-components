import css from './friendList.module.css'

export default function FriendList({ friends }) {
  const listItems = friends.map(friend =>
      <li className={css.item} key={friend.id}>
          {friend.isOnline === false ?
              (<span className={css.status}
                  style={{ backgroundColor: 'red' }}></span>)
              : (<span className={css.status}
                    style={{ backgroundColor: 'green' }}></span>)}
          <img src={friend.avatar} alt={friend.name} className={css.avatar}/>
          <p className={css.name}>{friend.name}</p>
    </li>
    );
    
  return (
        <ul className={css.list}>
            {listItems}
        </ul>
    )
}


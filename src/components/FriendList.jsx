

export default function FriendList({ friends }) {
  const listItems = friends.map(friend =>
      <li className="item" key={friend.id}>
          {friend.isOnline === false ? (<span className="status"></span>) : (<span className="status"></span>)}
          <img src={friend.avatar} alt={friend.name} />
          <p className="name">{friend.name}</p>
    </li>
  );
  return (
        <ul className="stat-list">
            {listItems}
        </ul>

    )
}


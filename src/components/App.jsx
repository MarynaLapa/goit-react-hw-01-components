import Profile from "./profile/Profile";
import user from './json/user.json';
import Statistics from "./statistics/Statistics";
import dataset from "./json/data.json";
import FriendList from "./friendList/FriendList";
import friends from './json/friends.json';
import TransactionHistory from './transaction/Transaction';
import transactions from './json/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> 

      <Statistics
        title="Upload stats"
        dataset={dataset}
      />
      <Statistics dataset={dataset} />

      <FriendList  
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />

    </div>
  );
};

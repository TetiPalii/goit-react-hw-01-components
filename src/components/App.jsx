import user from '../data/user';
import dataStats from '../data/dataStats';
import friends from 'data/friends';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendsList } from './friendsList/FriendsList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={dataStats} />
      <Statistics stats={dataStats} />
      <FriendsList friends={friends} />
    </div>
  );
};

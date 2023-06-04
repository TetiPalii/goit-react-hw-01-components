import user from '../data/user';
import dataStats from '../data/dataStats';
import friends from 'data/friends';
import transactions from 'data/transactions';
import { Profile } from '../components/profile/Profile';
import { Statistics } from '../components/statistics/Statistics';
import { FriendsList } from '../components/friendsList/FriendsList';
import { TransactionHistory } from '../components/transactionHistory/TransactionHistory';
import * as S from './App.styled';

export const App = () => {
  return (
    <S.AppContainer>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={dataStats} />
        <FriendsList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </S.AppContainer>
  );
};

import { FriendsListItem } from 'components/friendsListItem/FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <FriendsListItem friends={friends} />
    </ul>
  );
};

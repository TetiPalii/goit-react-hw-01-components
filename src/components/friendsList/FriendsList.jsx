import { FriendsListItem } from 'components/friendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import * as S from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <S.FriendList className="friend-list">
      <FriendsListItem friends={friends} />
    </S.FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

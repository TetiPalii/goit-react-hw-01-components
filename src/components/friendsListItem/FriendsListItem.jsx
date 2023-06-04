import * as S from './FriendListItem.styled';

export const FriendsListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <S.FriendListItem className="item" key={id}>
        <S.Status className="status" status={isOnline}>
          {isOnline}
        </S.Status>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </S.FriendListItem>
    );
  });
};

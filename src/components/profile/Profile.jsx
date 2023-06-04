import PropTypes from 'prop-types';
import * as S from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <S.ProfileWrapper className="profile">
      <S.ProfileDescription className="description">
        <S.ProfileImg src={avatar} alt="User avatar" className="avatar" />
        <S.Name className="name">{username}</S.Name>
        <S.TagLokation className="tag">{tag}</S.TagLokation>
        <S.TagLokation className="location">\{location}</S.TagLokation>
      </S.ProfileDescription>

      <S.StatsList className="stats">
        <S.StatsListItem>
          <S.Label className="label">Followers:</S.Label>
          <span className="quantity">{followers}</span>
        </S.StatsListItem>
        <S.StatsListItem>
          <S.Label className="label">Views:</S.Label>
          <span className="quantity">{views}</span>
        </S.StatsListItem>
        <S.StatsListItem>
          <S.Label className="label">Likes:</S.Label>
          <span className="quantity">{likes}</span>
        </S.StatsListItem>
      </S.StatsList>
    </S.ProfileWrapper>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

import PropTypes from 'prop-types';
import {
  ProfileCard,
  DescriptionCard,
  AvatarCard,
  UserName,
  UserLocation,
  UserTag,
  UserStats,
  LabelSpan,
  QuantitySpan,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <DescriptionCard>
        <AvatarCard src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </DescriptionCard>

      <UserStats>
        <li>
          <LabelSpan>Followers</LabelSpan>
          <QuantitySpan>{stats.followers}</QuantitySpan>
        </li>
        <li>
          <LabelSpan>Views</LabelSpan>
          <QuantitySpan>{stats.views}</QuantitySpan>
        </li>
        <li>
          <LabelSpan>Likes</LabelSpan>
          <QuantitySpan>{stats.likes}</QuantitySpan>
        </li>
      </UserStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

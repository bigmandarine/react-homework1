import PropTypes from 'prop-types';
import {
  FriendsListItem,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem>
      <FriendStatus isOnline={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendsListItem>
  );
};
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

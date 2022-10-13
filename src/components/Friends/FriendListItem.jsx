import PropTypes from 'prop-types';
import {
  FriendsListItem,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendListItem.styled';
export const FriendListItem = ({ friends }) => {
  return friends.map(({ isOnline, avatar, name, id }) => {
    return (
      <FriendsListItem key={id}>
        <FriendStatus isOnline={isOnline} />
        <FriendAvatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </FriendsListItem>
    );
  });
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './FriendListItem.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      <FriendListItem friends={friends} />
    </List>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

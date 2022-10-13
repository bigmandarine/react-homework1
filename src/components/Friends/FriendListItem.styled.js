import styled from 'styled-components';
export const List = styled.ul`
  margin-top: 40px;
`;
export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  width: 240px;
  border: 1px solid #e1e1e1;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
`;
export const FriendStatus = styled.span`
  margin-left: 10px;

  width: 15px;
  height: 15px;
  background-color: ${({ isOnline }) => {
    return isOnline ? '#008000' : '#FF0000';
  }};
  border-radius: 50%;
`;

export const FriendAvatar = styled.img`
  margin: 0px 10px;
`;
export const FriendName = styled.p`
  font-size: 25px;
`;

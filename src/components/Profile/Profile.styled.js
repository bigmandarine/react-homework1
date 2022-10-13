import styled from 'styled-components';
export const ProfileCard = styled.div`
  margin: 50px auto 0px;
  width: 280px;
  border: 1px solid #e1e1e1;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
`;
export const DescriptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;
export const AvatarCard = styled.img`
  margin-top: 30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid;
`;
export const UserName = styled.p`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 600;
  line-height: 1.33;
`;
export const UserTag = styled.p`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: #8a8787;
`;
export const UserLocation = styled.p`
  margin-top: 12px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.33;
  color: #8a8787;
`;
export const UserStats = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e1e1e1;
  background-color: #f3f6f9;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    width: calc((100% - 9px) / 3);
    :not(:last-child) {
      border-right: 1px solid #e1e1e1;
  }
`;
export const LabelSpan = styled.span`
  font-size: 14px;
  line-height: 1.33;
  color: #8a8787;
`;
export const QuantitySpan = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.33;
`;

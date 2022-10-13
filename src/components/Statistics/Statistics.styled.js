import styled from 'styled-components';
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const TitleStat = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  color: #64686c;
  font-size: 20px;
  text-transform: uppercase;
  border-bottom: 1px solid #64686c;
`;
export const StatisticsSec = styled.section`
  margin-top: 20px;
  width: 400px;
  text-align: center;
  border: 1px solid #e1e1e1;
  border-radius: 3px;
`;
export const StatList = styled.ul`
  display: flex;
`;
export const StatListItem = styled.li`
  padding: 10px 0 10px;
  display: flex;
  flex-direction: column;
  width: 80px;

  :not(:last-child) {
    border-right: 1px solid #64686c;
  }
`;
export const StatLabel = styled.span`
  font-size: 15px;
`;
export const StatPercent = styled.span`
  margin-top: 5px;
  font-size: 25px;
`;

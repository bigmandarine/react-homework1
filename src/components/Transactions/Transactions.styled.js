import styled from 'styled-components';
export const TransactionsTable = styled.table`
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 16px;
  line-height: 1.33;
  border-radius: 4px;
  border-spacing: 0;
  border-collapse: collapse;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.2), 0px 2px 0px rgba(0, 0, 0, 0.08),
    0px 1px 0px rgba(0, 0, 0, 0.08);
  thead {
    color: #ffffff;
    text-transform: uppercase;
    border-collapse: separate;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  th {
    width: 240px;
    padding: 14px;
    background-color: #00bdd1;
    :not(:last-child) {
      border-right: 1px solid #ffffff;
    }
    :first-child {
      border-top-left-radius: 4px;
    }
    :last-child {
      border-top-right-radius: 4px;
    }
  }
  tbody {
    tr {
      :nth-child(2n) {
        background-color: #edf2f2;
      }
    }
  }
  td {
    width: 240px;
    padding: 14px;
    text-transform: capitalize;
    color: #808080;
    border: 1px solid #d7d7d7;
  }
`;

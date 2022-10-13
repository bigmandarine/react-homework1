import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { TransactionsTable } from './Transactions.styled';
export const TransactionsHistory = ({ transactions }) => {
  return (
    <TransactionsTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </TransactionsTable>
  );
};
TransactionsHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

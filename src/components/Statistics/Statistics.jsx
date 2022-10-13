import PropTypes from 'prop-types';
import {
  TitleStat,
  StatisticsSec,
  StatList,
  StatLabel,
  StatPercent,
  StatListItem,
  getRandomHexColor,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSec>
      {title && <TitleStat>{title}</TitleStat>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem
            style={{ backgroundColor: getRandomHexColor() }}
            key={id}
          >
            <StatLabel>{label}</StatLabel>
            <StatPercent>{percentage}%</StatPercent>
          </StatListItem>
        ))}
      </StatList>
    </StatisticsSec>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
